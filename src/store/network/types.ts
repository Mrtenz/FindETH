import { Action } from 'redux';
import Web3 from 'web3';
import { Network } from '../../constants';

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
  web3?: Web3;
  current?: Network;
  addresses: Address[];
  balances: Balance[];
}

export const CONNECT = 'CONNECT';
export interface ConnectAction extends Action {
  type: typeof CONNECT;
  payload: Web3;
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

export const ADD_BALANCE = 'ADD_BALANCE';
export interface AddBalanceAction extends Action {
  type: typeof ADD_BALANCE;
  payload: Balance;
}

export type NetworkActions =
  | ConnectAction
  | SetNetworkAction
  | ClearBalancesAction
  | AddAddressAction
  | AddBalanceAction;
