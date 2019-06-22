import { SagaIterator } from 'redux-saga';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { ApplicationState } from '../store';
import { RESOLVE_NAME, ResolveNameAction } from './types';
import { setResolvedAddress } from './actions';
import { setAddress } from '../search';
import { Provider } from '@ethersproject/providers';

export function* ensSaga(): SagaIterator {
  yield all([takeLatest(RESOLVE_NAME, resolveNameSaga)]);
}

const getProvider = (state: ApplicationState): Provider | undefined => state.network.provider;

function* resolveNameSaga({ payload }: ResolveNameAction): SagaIterator {
  const provider: Provider = yield select(getProvider);
  const address = yield call([provider, provider.resolveName], payload);

  if (address) {
    yield put(setResolvedAddress(address));
    yield put(setAddress(address));
    return;
  }
  yield put(setResolvedAddress(null));
  yield put(setAddress(''));
}
