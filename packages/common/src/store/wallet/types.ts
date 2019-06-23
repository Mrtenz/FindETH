import { Action } from 'redux';
import { Wallet } from '@findeth/shared';

export interface WalletState {
  isLoading: boolean;
  implementation?: Wallet;
}

export const SET_LOADING = 'SET_LOADING';
export interface SetLoadingAction extends Action {
  type: typeof SET_LOADING;
  payload: boolean;
}

export const SET_IMPLEMENTATION = 'SET_IMPLEMENTATION';
export interface SetImplementationAction extends Action {
  type: typeof SET_IMPLEMENTATION;
  payload: Wallet;
}

export type WalletActions = SetLoadingAction | SetImplementationAction;
