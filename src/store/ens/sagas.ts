import { SagaIterator } from 'redux-saga';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { ApplicationState } from '../store';
import { providers } from 'ethers';
import { RESOLVE_NAME, ResolveNameAction } from './types';
import { setResolvedAddress } from './actions';
import { setAddress } from '../search';

export function* ensSaga(): SagaIterator {
  yield all([takeLatest(RESOLVE_NAME, resolveNameSaga)]);
}

const getProvider = (state: ApplicationState): providers.Provider | undefined =>
  state.network.provider;

function* resolveNameSaga({ payload }: ResolveNameAction): SagaIterator {
  const provider: providers.Provider = yield select(getProvider);
  const address = yield call([provider, provider.resolveName], payload);

  if (address) {
    yield put(setResolvedAddress(address));
    yield put(setAddress(address));
    return;
  }
  yield put(setResolvedAddress(null));
  yield put(setAddress(''));
}
