import { Action } from 'redux';
import Wallet from '../../wallets/Wallet';

export interface WalletState {
  isLoading: boolean;
  implementation?: Wallet;
}

export enum WalletType {
  MnemonicPhrase,
  Ledger,
  Trezor
}

export interface AbstractWalletResult {
  type: WalletType;
  address: string;
  path: string;
}

export interface MnemonicPhraseResult extends AbstractWalletResult {
  type: WalletType.MnemonicPhrase;
  withPassword: boolean;
}

export interface HardwareWalletResult extends AbstractWalletResult {
  type: WalletType.Ledger | WalletType.Trezor;
}

export type WalletResult = MnemonicPhraseResult | HardwareWalletResult;

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
