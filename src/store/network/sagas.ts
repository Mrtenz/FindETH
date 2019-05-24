import { SagaIterator } from 'redux-saga';
import { all, call, put, select, takeEvery, takeLatest } from 'redux-saga/effects';
import { ADD_ADDRESS, AddAddressAction, CONNECT, ConnectAction } from './types';
import { addBalance, setNetwork } from './actions';
import { ApplicationState } from '../store';
import { Network, NETWORK_MAINNET, NETWORK_TESTNET, NETWORK_UNKNOWN } from '../../constants';
import { providers, utils } from 'ethers';

export function* networkSaga(): SagaIterator {
  yield all([takeLatest(CONNECT, connectSaga), takeEvery(ADD_ADDRESS, addAddressSaga)]);
}

const getNetwork = async (provider: providers.Provider): Promise<Network> => {
  const id = (await provider.getNetwork()).chainId;
  switch (id) {
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

const getProvider = (state: ApplicationState): providers.Provider | undefined =>
  state.network.provider;

const getBalance = async (
  provider: providers.Provider,
  address: string
): Promise<utils.BigNumber> => {
  return provider.getBalance(address);
};

function* addAddressSaga({ payload }: AddAddressAction): SagaIterator {
  const provider: providers.Provider = yield select(getProvider);
  const rawBalance: utils.BigNumber = yield call(getBalance, provider, payload.address);
  const balance = utils.formatEther(rawBalance);

  if (!rawBalance.isZero()) {
    yield put(
      addBalance({
        ...payload,
        balance
      })
    );
  }
}
