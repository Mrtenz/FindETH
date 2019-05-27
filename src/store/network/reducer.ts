import { Reducer } from 'redux';
import {
  ADD_ADDRESS,
  ADD_BALANCES,
  NetworkActions,
  NetworkState,
  CLEAR_BALANCES,
  CONNECT,
  SET_NETWORK
} from './types';

const INITIAL_STATE: NetworkState = {
  addresses: [],
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
        addresses: [],
        balances: []
      };
    case ADD_ADDRESS:
      return {
        ...state,
        addresses: [...state.addresses, action.payload]
      };
    case ADD_BALANCES:
      return {
        ...state,
        balances: [...state.balances, ...action.payload],
        addresses: []
      };
    default:
      return state;
  }
};
