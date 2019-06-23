import { Action } from 'redux';

export interface Token {
  name: string;
  symbol: string;
  decimals: number;
  address: string;
}

export interface TokensState {
  isFetching: boolean;
  token?: Token;
}

export const FETCH_TOKEN = 'FETCH_TOKEN';
export interface FetchTokenAction extends Action {
  type: typeof FETCH_TOKEN;
  payload: string;
}

export const SET_TOKEN = 'SET_TOKEN';
export interface SetTokenAction extends Action {
  type: typeof SET_TOKEN;
  payload?: Token;
}

export type TokensActions = FetchTokenAction | SetTokenAction;
