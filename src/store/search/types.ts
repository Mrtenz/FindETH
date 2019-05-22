import { DerivationPath, SearchType } from '../../constants';

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
  failedChecks: number;
}

export const SET_SEARCH_TYPE = 'SET_SEARCH_TYPE';
export interface SetSearchTypeAction {
  type: typeof SET_SEARCH_TYPE;
  payload: SearchType;
}

export const SET_ADDRESS = 'SET_ADDRESS';
export interface SetAddressAction {
  type: typeof SET_ADDRESS;
  payload: string;
}

export const SET_DEPTH = 'SET_DEPTH';
export interface SetDepthAction {
  type: typeof SET_DEPTH;
  payload: number;
}

export const ADD_DERIVATION_PATH = 'ADD_DERIVATION_PATH';
export interface AddDerivationPathAction {
  type: typeof ADD_DERIVATION_PATH;
  payload: DerivationPath;
}

export const REMOVE_DERIVATION_PATH = 'REMOVE_DERIVATION_PATH';
export interface RemoveDerivationPathAction {
  type: typeof REMOVE_DERIVATION_PATH;
  payload: DerivationPath;
}

export const SEARCH = 'SEARCH';
export interface SearchAction {
  type: typeof SEARCH;
}

export const SEARCH_NEXT = 'SEARCH_NEXT';
export interface SearchNextAction {
  type: typeof SEARCH_NEXT;
}

export const SET_DERIVATION_PATH = 'SET_DERIVATION_PATH';
export interface SetDerivationPathAction {
  type: typeof SET_DERIVATION_PATH;
  payload: DerivationPath;
}

export const SET_INDEX = 'SET_INDEX';
export interface SetIndexAction {
  type: typeof SET_INDEX;
  payload: number;
}

export const SET_ADDRESS_INDEX = 'SET_ADDRESS_INDEX';
export interface SetAddressIndexAction {
  type: typeof SET_ADDRESS_INDEX;
  payload: number;
}

export const SET_ADDRESS_FOUND = 'SET_ADDRESS_FOUND';
export interface SetAddressFoundAction {
  type: typeof SET_ADDRESS_FOUND;
  payload: boolean;
}

export const SET_ADDRESS_NOT_FOUND = 'SET_ADDRESS_NOT_FOUND';
export interface SetAddressNotFoundAction {
  type: typeof SET_ADDRESS_NOT_FOUND;
  payload: boolean;
}

export const CHECK_FAILED = 'CHECK_FAILED';
export interface CheckFailedAction {
  type: typeof CHECK_FAILED;
}

export const SET_SEARCHING = 'SET_SEARCHING';
export interface SetSearchingAction {
  type: typeof SET_SEARCHING;
  payload: boolean;
}

export type SearchActions =
  | SetSearchTypeAction
  | SetAddressAction
  | SetDepthAction
  | AddDerivationPathAction
  | RemoveDerivationPathAction
  | SearchAction
  | SearchNextAction
  | SetDerivationPathAction
  | SetIndexAction
  | SetAddressIndexAction
  | SetAddressFoundAction
  | SetAddressNotFoundAction
  | CheckFailedAction
  | SetSearchingAction;
