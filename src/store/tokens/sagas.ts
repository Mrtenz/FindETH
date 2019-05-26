import { SagaIterator } from 'redux-saga';
import { all, select, takeLatest, call, put } from 'redux-saga/effects';
import { ApplicationState } from '../store';
import { providers } from 'ethers';
import { FETCH_TOKEN, FetchTokenAction } from './types';
import { getTokenInfo } from '../../utils';
import { setToken } from './actions';

export function* tokensSaga(): SagaIterator {
  yield all([takeLatest(FETCH_TOKEN, fetchTokenSaga)]);
}

const getProvider = (state: ApplicationState): providers.Provider | undefined =>
  state.network.provider;

function* fetchTokenSaga({ payload }: FetchTokenAction): SagaIterator {
  const provider: providers.Provider = yield select(getProvider);

  try {
    const tokenInfo = yield call(getTokenInfo, provider, payload);
    yield put(setToken(tokenInfo));
  } catch {
    // Not a token contract
    yield put(setToken(undefined));
  }
}
