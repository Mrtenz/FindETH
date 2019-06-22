import { Reducer } from 'redux';
import {
  ADD_DERIVATION_PATH,
  CHECK_FAILED,
  REMOVE_DERIVATION_PATH,
  SEARCH,
  SearchActions,
  SearchState,
  SET_ADDRESS,
  SET_ADDRESS_FOUND,
  SET_ADDRESS_INDEX,
  SET_ADDRESS_NOT_FOUND,
  SET_DEPTH,
  SET_DERIVATION_PATH,
  SET_DERIVATION_PATHS,
  SET_INDEX,
  SET_RESULT,
  SET_SEARCHING
} from './types';
import { ALL_DERIVATION_PATHS, SearchType } from '../../config';

const INITIAL_STATE: SearchState = {
  type: SearchType.Address,
  depth: 5,
  derivationPaths: ALL_DERIVATION_PATHS,
  isSearching: false,
  currentIndex: 0,
  currentAddressIndex: 0,
  addressFound: false,
  addressNotFound: false,
  failedChecks: 0
};

export const searchReducer: Reducer<SearchState, SearchActions> = (
  state = INITIAL_STATE,
  action
): SearchState => {
  switch (action.type) {
    case SET_ADDRESS:
      return {
        ...state,
        address: action.payload
      };
    case SET_DEPTH:
      return {
        ...state,
        depth: action.payload
      };
    case SET_DERIVATION_PATHS:
      return {
        ...state,
        derivationPaths: action.payload
      };
    case ADD_DERIVATION_PATH:
      return {
        ...state,
        derivationPaths: [...state.derivationPaths, action.payload]
      };
    case REMOVE_DERIVATION_PATH:
      return {
        ...state,
        derivationPaths: state.derivationPaths.filter(dPath => dPath !== action.payload)
      };
    case SEARCH:
      return {
        ...state,
        type: action.payload,
        isSearching: true
      };
    case SET_DERIVATION_PATH:
      return {
        ...state,
        currentPath: action.payload
      };
    case SET_INDEX:
      return {
        ...state,
        currentIndex: action.payload
      };
    case SET_ADDRESS_INDEX:
      return {
        ...state,
        currentAddressIndex: action.payload
      };
    case SET_ADDRESS_FOUND:
      return {
        ...state,
        addressFound: action.payload
      };
    case SET_ADDRESS_NOT_FOUND:
      return {
        ...state,
        addressNotFound: action.payload
      };
    case SET_RESULT:
      return {
        ...state,
        result: action.payload
      };
    case CHECK_FAILED:
      return {
        ...state,
        failedChecks: state.failedChecks + 1
      };
    case SET_SEARCHING:
      return {
        ...state,
        isSearching: action.payload
      };
    default:
      return state;
  }
};
