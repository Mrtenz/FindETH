import { SagaIterator } from 'redux-saga';
import { all, call, put, select, takeEvery, takeLatest } from 'redux-saga/effects';
import { Address, Balance, CONNECT, ConnectAction, FETCH_BALANCES } from './types';
import { addBalances, setNetwork } from './actions';
import { ApplicationState } from '../store';
import {
  Network,
  NETWORK_MAINNET,
  NETWORK_TESTNET,
  NETWORK_UNKNOWN,
  SearchType
} from '../../config';
import { Provider } from '@ethersproject/providers';
import { Token } from '../tokens';
import { getEtherBalances, getTokenBalances } from '../../utils';

export function* networkSaga(): SagaIterator {
  yield all([takeLatest(CONNECT, connectSaga), takeEvery(FETCH_BALANCES, fetchBalancesSaga)]);
}

const getNetwork = async (provider: Provider): Promise<Network> => {
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

const getProvider = (state: ApplicationState): Provider | undefined => state.network.provider;

const getAddresses = (state: ApplicationState): Address[] => state.network.addresses;

const getSearchType = (state: ApplicationState): SearchType => state.search.type;

const handlers: { [key: number]: (addresses: Address[]) => SagaIterator } = {
  [SearchType.Ether]: fetchEtherBalances,
  [SearchType.Token]: fetchTokenBalances
};

function* fetchBalancesSaga(): SagaIterator {
  const addresses: Address[] = yield select(getAddresses);
  const type: SearchType = yield select(getSearchType);
  const handler = handlers[type];

  const balances: Balance[] = yield call(handler, addresses);

  yield put(addBalances(balances));
}

function* fetchEtherBalances(addresses: Address[]): SagaIterator {
  /*const provider: providers.Provider = yield select(getProvider);

  const balance: utils.BigNumber = yield call([provider, provider.getBalance], address.address);
  return utils.formatUnits(balance, 18);*/

  const provider: Provider = yield select(getProvider);

  return yield call(getEtherBalances, provider, addresses);
}

const getToken = (state: ApplicationState): Token | undefined => state.tokens.token;

function* fetchTokenBalances(addresses: Address[]): SagaIterator {
  /*const provider: providers.Provider = yield select(getProvider);
  const token: Token = yield select(getToken);

  const balance: utils.BigNumber = yield call(getTokenBalance, provider, token, address.address);
  return utils.formatUnits(balance, token.decimals);*/

  const provider: Provider = yield select(getProvider);
  const token: Token = yield select(getToken);

  return yield call(getTokenBalances, provider, addresses, token);
}
