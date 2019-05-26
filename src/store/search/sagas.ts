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
import { SearchType } from '../../config';
import { addAddress, clearBalances } from '../network';
import { getFullPath } from '../../utils';

export function* searchRootSaga(): SagaIterator {
  yield all([takeLatest(SEARCH, searchSaga), takeLatest(SEARCH_NEXT, searchNextSaga)]);
}

const getSearchState = (state: ApplicationState) => state.search;
const getImplementation = (state: ApplicationState) => state.wallet.implementation;

function* searchSaga(): SagaIterator {
  const { derivationPaths }: SearchState = yield select(getSearchState);

  yield put(clearBalances());
  yield put(setDerivationPath(derivationPaths[0]));
  yield put(setIndex(0));
  yield put(setAddressIndex(0));
  yield put(setAddressFound(false));
  yield put(setAddressNotFound(false));
  yield put(searchNext());
}

const handlers: { [key: number]: (currentAddress: string) => SagaIterator } = {
  [SearchType.Address]: searchNextAddress,
  [SearchType.Ether]: searchNextEther,
  [SearchType.Token]: searchNextEther // Ether and tokens use the same logic here
};

function* searchNextSaga(): SagaIterator {
  const {
    derivationPaths,
    currentPath,
    currentIndex,
    currentAddressIndex,
    depth,
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
      currentPath,
      currentAddressIndex
    );

    const handler = handlers[type];
    const done = yield call(handler, foundAddress);
    if (done) {
      return;
    }
  } catch (error) {
    yield put(checkFailed());
    console.error(error);
  }

  yield put(setAddressIndex(currentAddressIndex + 1));
  yield delay(1);
  yield put(searchNext());
}

function* searchNextEther(currentAddress: string): SagaIterator {
  const { currentPath, currentAddressIndex }: SearchState = yield select(getSearchState);

  yield put(
    addAddress({
      address: currentAddress,
      path: getFullPath(currentPath!, currentAddressIndex)
    })
  );

  return false;
}

function* searchNextAddress(currentAddress: string): SagaIterator {
  const { address }: SearchState = yield select(getSearchState);

  if (currentAddress.toLowerCase() === address!.toLowerCase()) {
    yield put(setAddressFound(true));
    yield put(setSearching(false));
    return true;
  }

  return false;
}
