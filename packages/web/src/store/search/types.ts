import { Action } from 'redux';
import { DerivationPath, SearchType } from '../../config';
import { WalletResult } from '../wallet';

export interface SearchState {
  type: SearchType;
  address?: string;
  depth: number;
  derivationPaths: DerivationPath[];
  isSearching: boolean;
  currentPath?: DerivationPath;
  currentIndex: number;
  currentAddressIndex: number;
  addressFound: boolean;
  addressNotFound: boolean;
  result?: WalletResult;
  failedChecks: number;
}

export const SET_ADDRESS = 'SET_ADDRESS';
export interface SetAddressAction extends Action {
  type: typeof SET_ADDRESS;
  payload: string;
}

export const SET_DEPTH = 'SET_DEPTH';
export interface SetDepthAction extends Action {
  type: typeof SET_DEPTH;
  payload: number;
}

export const SET_DERIVATION_PATHS = 'SET_DERIVATION_PATHS';
export interface SetDerivationPathsAction extends Action {
  type: typeof SET_DERIVATION_PATHS;
  payload: DerivationPath[];
}

export const ADD_DERIVATION_PATH = 'ADD_DERIVATION_PATH';
export interface AddDerivationPathAction extends Action {
  type: typeof ADD_DERIVATION_PATH;
  payload: DerivationPath;
}

export const REMOVE_DERIVATION_PATH = 'REMOVE_DERIVATION_PATH';
export interface RemoveDerivationPathAction extends Action {
  type: typeof REMOVE_DERIVATION_PATH;
  payload: DerivationPath;
}

export const TOGGLE_DERIVATION_PATHS = 'TOGGLE_DERIVATION_PATHS';
export interface ToggleDerivationPathsAction extends Action {
  type: typeof TOGGLE_DERIVATION_PATHS;
  payload: boolean;
}

export const SEARCH = 'SEARCH';
export interface SearchAction extends Action {
  type: typeof SEARCH;
  payload: SearchType;
}

export const SEARCH_NEXT = 'SEARCH_NEXT';
export interface SearchNextAction extends Action {
  type: typeof SEARCH_NEXT;
}

export const SET_DERIVATION_PATH = 'SET_DERIVATION_PATH';
export interface SetDerivationPathAction extends Action {
  type: typeof SET_DERIVATION_PATH;
  payload: DerivationPath;
}

export const SET_INDEX = 'SET_INDEX';
export interface SetIndexAction extends Action {
  type: typeof SET_INDEX;
  payload: number;
}

export const SET_ADDRESS_INDEX = 'SET_ADDRESS_INDEX';
export interface SetAddressIndexAction extends Action {
  type: typeof SET_ADDRESS_INDEX;
  payload: number;
}

export const SET_ADDRESS_FOUND = 'SET_ADDRESS_FOUND';
export interface SetAddressFoundAction extends Action {
  type: typeof SET_ADDRESS_FOUND;
  payload: boolean;
}

export const SET_ADDRESS_NOT_FOUND = 'SET_ADDRESS_NOT_FOUND';
export interface SetAddressNotFoundAction extends Action {
  type: typeof SET_ADDRESS_NOT_FOUND;
  payload: boolean;
}

export const SET_RESULT = 'SET_RESULT';
export interface SetResultAction extends Action {
  type: typeof SET_RESULT;
  payload: WalletResult;
}

export const CHECK_FAILED = 'CHECK_FAILED';
export interface CheckFailedAction extends Action {
  type: typeof CHECK_FAILED;
}

export const SET_SEARCHING = 'SET_SEARCHING';
export interface SetSearchingAction extends Action {
  type: typeof SET_SEARCHING;
  payload: boolean;
}

export type SearchActions =
  | SetAddressAction
  | SetDepthAction
  | SetDerivationPathsAction
  | AddDerivationPathAction
  | RemoveDerivationPathAction
  | ToggleDerivationPathsAction
  | SearchAction
  | SearchNextAction
  | SetDerivationPathAction
  | SetIndexAction
  | SetAddressIndexAction
  | SetAddressFoundAction
  | SetAddressNotFoundAction
  | SetResultAction
  | CheckFailedAction
  | SetSearchingAction;
