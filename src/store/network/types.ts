import { Action } from 'redux';
import { Provider } from '@ethersproject/providers';
import { Network } from '../../config';

export interface Address {
  address: string;
  path: string;
}

export interface Balance {
  address: string;
  path: string;
  balance: string;
}

export interface NetworkState {
  provider?: Provider;
  current?: Network;
  addresses: Address[];
  balances: Balance[];
}

export const CONNECT = 'CONNECT';
export interface ConnectAction extends Action {
  type: typeof CONNECT;
  payload: Provider;
}

export const SET_NETWORK = 'SET_NETWORK';
export interface SetNetworkAction extends Action {
  type: typeof SET_NETWORK;
  payload: Network;
}

export const CLEAR_BALANCES = 'CLEAR_BALANCES';
export interface ClearBalancesAction extends Action {
  type: typeof CLEAR_BALANCES;
}

export const ADD_ADDRESS = 'ADD_ADDRESS';
export interface AddAddressAction extends Action {
  type: typeof ADD_ADDRESS;
  payload: Address;
}

export const FETCH_BALANCES = 'FETCH_BALANCES';
export interface FetchBalancesAction extends Action {
  type: typeof FETCH_BALANCES;
}

export const ADD_BALANCES = 'ADD_BALANCES';
export interface AddBalanceAction extends Action {
  type: typeof ADD_BALANCES;
  payload: Balance[];
}

export type NetworkActions =
  | ConnectAction
  | SetNetworkAction
  | ClearBalancesAction
  | AddAddressAction
  | FetchBalancesAction
  | AddBalanceAction;
