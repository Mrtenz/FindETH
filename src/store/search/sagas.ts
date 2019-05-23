import { SagaIterator } from 'redux-saga';
import { all, call, delay, put, select, takeLatest } from 'redux-saga/effects';
import { SEARCH, SEARCH_NEXT, SearchState } from './types';
import {
  checkFailed,
  searchNext,
  setAddressFound,
  setAddressIndex,
  setAddressNotFound,
  setDerivationPath,
  setIndex,
  setSearching
} from './actions';
import { ApplicationState } from '../store';
import Wallet from '../../wallets/Wallet';
import { history } from '../../App';
import { SearchType } from '../../constants';
import { addAddress, clearBalances } from '../network';

export function* searchRootSaga(): SagaIterator {
  yield all([takeLatest(SEARCH, searchSaga), takeLatest(SEARCH_NEXT, searchNextSaga)]);
}

const getSearchState = (state: ApplicationState) => state.search;
const getImplementation = (state: ApplicationState) => state.wallet.implementation;

function* searchSaga(): SagaIterator {
  const { derivationPaths, type }: SearchState = yield select(getSearchState);

  yield put(clearBalances());
  yield put(setDerivationPath(derivationPaths[0]));
  yield put(setIndex(0));
  yield put(setAddressIndex(0));
  yield put(setAddressFound(false));
  yield put(setAddressNotFound(false));

  history.navigate(`/search/${type === SearchType.Ether ? 'ether' : 'address'}`);

  yield put(searchNext());
}

function* searchNextSaga(): SagaIterator {
  const {
    derivationPaths,
    currentPath,
    currentIndex,
    currentAddressIndex,
    depth,
    address,
    isSearching,
    type
  }: SearchState = yield select(getSearchState);
  const implementation: Wallet = yield select(getImplementation);

  if (!isSearching) {
    return;
  }

  if (!currentPath) {
    if (type === SearchType.Address) {
      yield put(setAddressNotFound(true));
    }

    yield put(setSearching(false));
    return;
  }

  if (currentAddressIndex >= depth) {
    yield put(setDerivationPath(derivationPaths[currentIndex + 1]));
    yield put(setIndex(currentIndex + 1));
    yield put(setAddressIndex(0));
    yield put(searchNext());
    return;
  }

  try {
    const foundAddress: string = yield call(
      [implementation, implementation.getAddress],
      currentPath.prefix,
      currentAddressIndex
    );

    if (type === SearchType.Ether) {
      yield call(searchNextEther, foundAddress, `${currentPath.prefix}/${currentAddressIndex}`);
    } else {
      const done = yield call(searchNextAddress, foundAddress, address!);
      if (done) {
        return;
      }
    }
  } catch (error) {
    yield put(checkFailed());
    console.error(error);
  }

  yield put(setAddressIndex(currentAddressIndex + 1));
  yield delay(1);
  yield put(searchNext());
}

function* searchNextEther(address: string, path: string): SagaIterator {
  yield put(
    addAddress({
      address,
      path
    })
  );
}

function* searchNextAddress(foundAddress: string, address: string): SagaIterator {
  if (foundAddress.toLowerCase() === address.toLowerCase()) {
    yield put(setAddressFound(true));
    yield put(setSearching(false));
    return true;
  }
  return false;
}
