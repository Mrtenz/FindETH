import { SagaIterator } from 'redux-saga';
import { all, takeEvery, put, call } from 'redux-saga/effects';
import { ADD_ADDRESS, AddAddressAction } from './types';
import { addBalance } from './actions';
import Web3 from 'web3';

const web3 = new Web3(Web3.givenProvider || 'https://api.mycryptoapi.com/eth');

export function* balanceSaga(): SagaIterator {
  yield all([takeEvery(ADD_ADDRESS, addAddressSaga)]);
}

const getBalance = async (address: string) => {
  return web3.eth.getBalance(address);
};

function* addAddressSaga({ payload }: AddAddressAction): SagaIterator {
  const rawBalance = yield call(getBalance, payload.address);

  if (rawBalance !== '0') {
    yield put(
      addBalance({
        ...payload,
        balance: web3.utils.fromWei(rawBalance)
      })
    );
  }
}
