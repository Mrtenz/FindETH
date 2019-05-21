import { SagaIterator } from 'redux-saga';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { SEARCH, SEARCH_NEXT, SearchState } from './types';
import {
  checkFailed,
  searchNext,
  setAddressFound,
  setAddressIndex,
  setAddressNotFound,
  setDerivationPath,
  setIndex
} from './actions';
import { ApplicationState } from '../store';
import Wallet from '../../wallets/Wallet';
import { history } from '../../App';

export function* searchRootSaga (): SagaIterator {
  yield all([takeLatest(SEARCH, searchSaga), takeLatest(SEARCH_NEXT, searchNextSaga)]);
}

const getSearchState = (state: ApplicationState) => state.search;
const getImplementation = (state: ApplicationState) => state.wallet.implementation;

function* searchSaga (): SagaIterator {
  const { derivationPaths }: SearchState = yield select(getSearchState);

  yield put(setDerivationPath(derivationPaths[0]));
  yield put(setIndex(0));
  yield put(setAddressIndex(0));
  yield put(setAddressFound(false));
  yield put(setAddressNotFound(false));

  history.navigate('/search');

  yield put(searchNext());
}

function* searchNextSaga (): SagaIterator {
  const {
    derivationPaths,
    currentPath,
    currentIndex,
    currentAddressIndex,
    depth,
    address
  }: SearchState = yield select(getSearchState);
  const implementation: Wallet = yield select(getImplementation);

  if (!currentPath) {
    yield put(setAddressNotFound(true));
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
    if (foundAddress.toLowerCase() === address!.toLowerCase()) {
      yield put(setAddressFound(true));
      return;
    }
  } catch (error) {
    yield put(checkFailed());
  }

  yield put(setAddressIndex(currentAddressIndex + 1));
  yield put(searchNext());
}
