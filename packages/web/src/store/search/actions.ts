import { ActionCreator } from 'redux';
import {
  ADD_DERIVATION_PATH,
  AddDerivationPathAction,
  CHECK_FAILED,
  CheckFailedAction,
  REMOVE_DERIVATION_PATH,
  RemoveDerivationPathAction,
  SEARCH,
  SEARCH_NEXT,
  SearchAction,
  SearchNextAction,
  SET_ADDRESS,
  SET_ADDRESS_FOUND,
  SET_ADDRESS_INDEX,
  SET_ADDRESS_NOT_FOUND,
  SET_DEPTH,
  SET_DERIVATION_PATH,
  SET_DERIVATION_PATHS,
  SET_INDEX,
  SET_RESULT,
  SET_SEARCHING,
  SetAddressAction,
  SetAddressFoundAction,
  SetAddressIndexAction,
  SetAddressNotFoundAction,
  SetDepthAction,
  SetDerivationPathAction,
  SetDerivationPathsAction,
  SetIndexAction,
  SetResultAction,
  SetSearchingAction,
  TOGGLE_DERIVATION_PATHS,
  ToggleDerivationPathsAction
} from './types';
import { DerivationPath, SearchType } from '../../config';
import { WalletResult } from '../wallet';

export const setAddress: ActionCreator<SetAddressAction> = (payload: string) => ({
  type: SET_ADDRESS,
  payload
});

export const setDepth: ActionCreator<SetDepthAction> = (payload: number) => ({
  type: SET_DEPTH,
  payload
});

export const setDerivationPaths: ActionCreator<SetDerivationPathsAction> = (
  payload: DerivationPath[]
) => ({
  type: SET_DERIVATION_PATHS,
  payload
});

export const addDerivationPath: ActionCreator<AddDerivationPathAction> = (
  payload: DerivationPath
) => ({
  type: ADD_DERIVATION_PATH,
  payload
});

export const removeDerivationPath: ActionCreator<RemoveDerivationPathAction> = (
  payload: DerivationPath
) => ({
  type: REMOVE_DERIVATION_PATH,
  payload
});

export const toggleDerivationPaths: ActionCreator<ToggleDerivationPathsAction> = (
  payload: boolean
) => ({
  type: TOGGLE_DERIVATION_PATHS,
  payload
});

export const search: ActionCreator<SearchAction> = (payload: SearchType) => ({
  type: SEARCH,
  payload
});

export const searchNext: ActionCreator<SearchNextAction> = () => ({
  type: SEARCH_NEXT
});

export const setDerivationPath: ActionCreator<SetDerivationPathAction> = (
  payload: DerivationPath
) => ({
  type: SET_DERIVATION_PATH,
  payload
});

export const setIndex: ActionCreator<SetIndexAction> = (payload: number) => ({
  type: SET_INDEX,
  payload
});

export const setAddressIndex: ActionCreator<SetAddressIndexAction> = (payload: number) => ({
  type: SET_ADDRESS_INDEX,
  payload
});

export const setAddressFound: ActionCreator<SetAddressFoundAction> = (payload: boolean) => ({
  type: SET_ADDRESS_FOUND,
  payload
});

export const setAddressNotFound: ActionCreator<SetAddressNotFoundAction> = (payload: boolean) => ({
  type: SET_ADDRESS_NOT_FOUND,
  payload
});

export const setResult: ActionCreator<SetResultAction> = (payload: WalletResult) => ({
  type: SET_RESULT,
  payload
});

export const checkFailed: ActionCreator<CheckFailedAction> = () => ({
  type: CHECK_FAILED
});

export const setSearching: ActionCreator<SetSearchingAction> = (payload: boolean) => ({
  type: SET_SEARCHING,
  payload
});
