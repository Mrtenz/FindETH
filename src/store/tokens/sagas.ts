import { SagaIterator } from 'redux-saga';
import { all, select, takeLatest, call, put } from 'redux-saga/effects';
import { ApplicationState } from '../store';
import { Provider } from '@ethersproject/providers';
import { FETCH_TOKEN, FetchTokenAction } from './types';
import { getTokenInfo } from '../../utils';
import { setToken } from './actions';

export function* tokensSaga(): SagaIterator {
  yield all([takeLatest(FETCH_TOKEN, fetchTokenSaga)]);
}

const getProvider = (state: ApplicationState): Provider | undefined => state.network.provider;

function* fetchTokenSaga({ payload }: FetchTokenAction): SagaIterator {
  const provider: Provider = yield select(getProvider);

  try {
    const tokenInfo = yield call(getTokenInfo, provider, payload);
    yield put(setToken(tokenInfo));
  } catch {
    // Not a token contract
    yield put(setToken(undefined));
  }
}
