import { ActionCreator } from 'redux';
import {
  ADD_BALANCES,
  ADD_RESULT,
  AddBalanceAction,
  AddResultAction,
  Balance,
  CLEAR_BALANCES,
  ClearBalancesAction,
  CONNECT,
  ConnectAction,
  FETCH_BALANCES,
  FetchBalancesAction,
  SET_NETWORK,
  SetNetworkAction
} from './types';
import { Provider } from '@ethersproject/providers';
import { Network, WalletResult } from '@findeth/shared';

export const connectProvider: ActionCreator<ConnectAction> = (payload: Provider) => ({
  type: CONNECT,
  payload
});

export const setNetwork: ActionCreator<SetNetworkAction> = (payload: Network) => ({
  type: SET_NETWORK,
  payload
});

export const clearBalances: ActionCreator<ClearBalancesAction> = () => ({
  type: CLEAR_BALANCES
});

export const addResult: ActionCreator<AddResultAction> = (payload: WalletResult) => ({
  type: ADD_RESULT,
  payload
});

export const fetchBalances: ActionCreator<FetchBalancesAction> = () => ({
  type: FETCH_BALANCES
});

export const addBalances: ActionCreator<AddBalanceAction> = (payload: Balance[]) => ({
  type: ADD_BALANCES,
  payload
});
