import { ActionCreator } from 'redux';
import {
  ADD_ADDRESS,
  ADD_BALANCES,
  AddAddressAction,
  AddBalanceAction,
  Address,
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
import { Network } from '../../config';

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

export const addAddress: ActionCreator<AddAddressAction> = (payload: Address) => ({
  type: ADD_ADDRESS,
  payload
});

export const fetchBalances: ActionCreator<FetchBalancesAction> = () => ({
  type: FETCH_BALANCES
});

export const addBalances: ActionCreator<AddBalanceAction> = (payload: Balance[]) => ({
  type: ADD_BALANCES,
  payload
});
