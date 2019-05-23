import { Reducer } from 'redux';
import {
  ADD_ADDRESS,
  ADD_BALANCE,
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
        web3: action.payload
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
    case ADD_BALANCE:
      return {
        ...state,
        balances: [...state.balances, action.payload]
      };
    default:
      return state;
  }
};
