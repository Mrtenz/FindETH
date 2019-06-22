import { SagaIterator } from 'redux-saga';
import { all, call, delay, put, select, takeLatest } from 'redux-saga/effects';
import {
  SEARCH,
  SEARCH_NEXT,
  SearchState,
  TOGGLE_DERIVATION_PATHS,
  ToggleDerivationPathsAction
} from './types';
import {
  checkFailed,
  searchNext,
  setAddressFound,
  setAddressIndex,
  setAddressNotFound,
  setDerivationPath,
  setDerivationPaths,
  setIndex,
  setResult,
  setSearching
} from './actions';
import { ApplicationState } from '../store';
import Wallet from '../../wallets/Wallet';
import { SearchType } from '../../config';
import { addResult, clearBalances, fetchBalances } from '../network';
import { WalletResult } from '../wallet';

export function* searchRootSaga(): SagaIterator {
  yield all([
    takeLatest(TOGGLE_DERIVATION_PATHS, toggleDerivationPathsSaga),
    takeLatest(SEARCH, searchSaga),
    takeLatest(SEARCH_NEXT, searchNextSaga)
  ]);
}

const getSearchState = (state: ApplicationState) => state.search;
const getImplementation = (state: ApplicationState) => state.wallet.implementation;

function* toggleDerivationPathsSaga({ payload }: ToggleDerivationPathsAction): SagaIterator {
  if (payload) {
    const implementation: Wallet = yield select(getImplementation);
    yield put(setDerivationPaths(implementation.getDerivationPaths()));
  } else {
    yield put(setDerivationPaths([]));
  }
}

function* searchSaga(): SagaIterator {
  const { derivationPaths }: SearchState = yield select(getSearchState);
  const implementation: Wallet = yield select(getImplementation);

  if (implementation.prefetch) {
    yield call([implementation, implementation.prefetch], derivationPaths);
  }

  yield put(clearBalances());
  yield put(setDerivationPath(derivationPaths[0]));
  yield put(setIndex(0));
  yield put(setAddressIndex(0));
  yield put(setAddressFound(false));
  yield put(setAddressNotFound(false));
  yield put(searchNext());
}

const handlers: { [key: number]: (result: WalletResult) => SagaIterator } = {
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
    } else {
      yield put(fetchBalances());
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
    const result: WalletResult | WalletResult[] = yield call(
      [implementation, implementation.getAddress],
      currentPath,
      currentAddressIndex
    );

    let results: WalletResult[];

    if (Array.isArray(result)) {
      results = [...result];
    } else {
      results = [result];
    }

    const handler = handlers[type];

    for (const item of results) {
      const done = yield call(handler, item);
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

function* searchNextEther(result: WalletResult): SagaIterator {
  yield put(addResult(result));

  return false;
}

function* searchNextAddress(result: WalletResult): SagaIterator {
  const { address }: SearchState = yield select(getSearchState);

  if (result.address.toLowerCase() === address!.toLowerCase()) {
    yield put(setResult(result));
    yield put(setAddressFound(true));
    yield put(setSearching(false));
    return true;
  }

  return false;
}
