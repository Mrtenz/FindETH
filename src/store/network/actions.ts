import { ActionCreator } from 'redux';
import {
  ADD_ADDRESS,
  ADD_BALANCE,
  AddAddressAction,
  AddBalanceAction,
  Address,
  Balance,
  CLEAR_BALANCES,
  ClearBalancesAction,
  CONNECT,
  ConnectAction,
  SET_NETWORK,
  SetNetworkAction
} from './types';
import { providers } from 'ethers';
import { Network } from '../../config';

export const connectProvider: ActionCreator<ConnectAction> = (payload: providers.Provider) => ({
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

export const addBalance: ActionCreator<AddBalanceAction> = (payload: Balance) => ({
  type: ADD_BALANCE,
  payload
});
