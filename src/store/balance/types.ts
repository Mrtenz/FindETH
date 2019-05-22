import { Action } from 'redux';

export interface Address {
  address: string;
  path: string;
}

export interface Balance {
  address: string;
  path: string;
  balance: string;
}

export interface BalanceState {
  addresses: Address[];
  balances: Balance[];
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

export type BalanceActions = ClearBalancesAction | AddAddressAction | AddBalanceAction;
