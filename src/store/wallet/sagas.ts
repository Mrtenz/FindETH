import { SagaIterator } from 'redux-saga';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { SET_IMPLEMENTATION, SetImplementationAction } from './types';
import { setLoading } from './actions';
import { history } from '../../App';

export function* walletSaga(): SagaIterator {
  yield all([takeLatest(SET_IMPLEMENTATION, setImplementationSaga)]);
}

function* setImplementationSaga(action: SetImplementationAction): SagaIterator {
  yield put(setLoading(true));
  try {
    yield call([action.payload, action.payload.initialize]);
    yield put(setLoading(false));
    history.navigate('/steps/2');
  } catch (error) {
    // TODO: Pretty errors
    alert(error.toString());
    yield put(setLoading(false));
    return;
  }
}
