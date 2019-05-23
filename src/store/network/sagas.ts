import { SagaIterator } from 'redux-saga';
import { all, call, put, select, takeEvery, takeLatest } from 'redux-saga/effects';
import { ADD_ADDRESS, AddAddressAction, CONNECT, ConnectAction } from './types';
import { addBalance, setNetwork } from './actions';
import { ApplicationState } from '../store';
import Web3 from 'web3';
import { Network, NETWORK_MAINNET, NETWORK_TESTNET, NETWORK_UNKNOWN } from '../../constants';

export function* networkSaga(): SagaIterator {
  yield all([takeLatest(CONNECT, connectSaga), takeEvery(ADD_ADDRESS, addAddressSaga)]);
}

const getNetwork = async (web3: Web3): Promise<Network> => {
  const version = await web3.eth.net.getId();
  switch (version) {
    case 1:
      return NETWORK_MAINNET;
    case 3: // Ropsten
    case 4: // Rinkeby
    case 5: // Goerli
    case 6: // Kotti Classic
    case 42: // Kovan
      return NETWORK_TESTNET;
    default:
      return NETWORK_UNKNOWN;
  }
};

function* connectSaga({ payload }: ConnectAction): SagaIterator {
  const network = yield call(getNetwork, payload);
  yield put(setNetwork(network));
}

const getWeb3 = (state: ApplicationState): Web3 | undefined => state.network.web3;

const getBalance = async (web3: Web3, address: string): Promise<string> => {
  return web3.eth.getBalance(address);
};

function* addAddressSaga({ payload }: AddAddressAction): SagaIterator {
  const web3 = yield select(getWeb3);
  const rawBalance = yield call(getBalance, web3, payload.address);

  if (rawBalance !== '0') {
    yield put(
      addBalance({
        ...payload,
        balance: web3.utils.fromWei(rawBalance)
      })
    );
  }
}
