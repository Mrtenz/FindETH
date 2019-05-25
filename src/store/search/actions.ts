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
  SET_INDEX,
  SET_SEARCH_TYPE,
  SET_SEARCHING,
  SetAddressAction,
  SetAddressFoundAction,
  SetAddressIndexAction,
  SetAddressNotFoundAction,
  SetDepthAction,
  SetDerivationPathAction,
  SetIndexAction,
  SetSearchingAction,
  SetSearchTypeAction
} from './types';
import { DerivationPath, SearchType } from '../../config';

export const setSearchType: ActionCreator<SetSearchTypeAction> = (payload: SearchType) => ({
  type: SET_SEARCH_TYPE,
  payload
});

export const setAddress: ActionCreator<SetAddressAction> = (payload: string) => ({
  type: SET_ADDRESS,
  payload
});

export const setDepth: ActionCreator<SetDepthAction> = (payload: number) => ({
  type: SET_DEPTH,
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

export const search: ActionCreator<SearchAction> = () => ({
  type: SEARCH
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

export const checkFailed: ActionCreator<CheckFailedAction> = () => ({
  type: CHECK_FAILED
});

export const setSearching: ActionCreator<SetSearchingAction> = (payload: boolean) => ({
  type: SET_SEARCHING,
  payload
});
