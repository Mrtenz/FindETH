import { Reducer } from 'redux';
import {
  ADD_RESULT,
  ADD_BALANCES,
  NetworkActions,
  NetworkState,
  CLEAR_BALANCES,
  CONNECT,
  SET_NETWORK
} from './types';

const INITIAL_STATE: NetworkState = {
  results: [],
  balances: []
};

export const networkReducer: Reducer<NetworkState, NetworkActions> = (
  state = INITIAL_STATE,
  action
): NetworkState => {
  switch (action.type) {
    case CONNECT:
      return {
        ...state,
        provider: action.payload
      };
    case SET_NETWORK:
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_BALANCES:
      return {
        ...state,
        results: [],
        balances: []
      };
    case ADD_RESULT:
      return {
        ...state,
        results: [...state.results, action.payload]
      };
    case ADD_BALANCES:
      return {
        ...state,
        balances: [...state.balances, ...action.payload],
        results: []
      };
    default:
      return state;
  }
};
