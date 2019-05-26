import { SagaIterator } from 'redux-saga';
import { all, call, put, select, takeEvery, takeLatest } from 'redux-saga/effects';
import { ADD_ADDRESS, AddAddressAction, Address, CONNECT, ConnectAction } from './types';
import { addBalance, setNetwork } from './actions';
import { ApplicationState } from '../store';
import {
  Network,
  NETWORK_MAINNET,
  NETWORK_TESTNET,
  NETWORK_UNKNOWN,
  SearchType
} from '../../config';
import { providers, utils } from 'ethers';
import { Token } from '../tokens';
import { getTokenBalance } from '../../utils';

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

const getSearchType = (state: ApplicationState): SearchType => state.search.type;

const handlers: { [key: number]: (address: Address) => SagaIterator } = {
  [SearchType.Ether]: fetchEtherBalance,
  [SearchType.Token]: fetchTokenBalance
};

function* addAddressSaga({ payload }: AddAddressAction): SagaIterator {
  const type: SearchType = yield select(getSearchType);
  const handler = handlers[type];

  const balance = yield call(handler, payload);

  yield put(
    addBalance({
      ...payload,
      balance
    })
  );
}

function* fetchEtherBalance(address: Address): SagaIterator {
  const provider: providers.Provider = yield select(getProvider);
  // const rawBalance: utils.BigNumber = yield call(getBalance, provider, address.address);
  // const balance = utils.formatEther(rawBalance);

  const balance: utils.BigNumber = yield call([provider, provider.getBalance], address.address);
  return utils.formatUnits(balance, 18);
}

const getToken = (state: ApplicationState): Token | undefined => state.tokens.token;

function* fetchTokenBalance(address: Address): SagaIterator {
  const provider: providers.Provider = yield select(getProvider);
  const token: Token = yield select(getToken);

  const balance: utils.BigNumber = yield call(getTokenBalance, provider, token, address.address);
  return utils.formatUnits(balance, token.decimals);
}
