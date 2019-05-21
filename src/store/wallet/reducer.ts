import { Reducer } from 'redux';
import { SET_IMPLEMENTATION, SET_LOADING, WalletActions, WalletState } from './types';

const INITIAL_STATE: WalletState = {
  isLoading: false
};

export const walletReducer: Reducer<WalletState, WalletActions> = (
  state = INITIAL_STATE,
  action
): WalletState => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };
    case SET_IMPLEMENTATION:
      return {
        ...state,
        implementation: action.payload
      };
    default:
      return state;
  }
};
