import { Reducer } from 'redux';
import { ADD_ADDRESS, ADD_BALANCE, BalanceActions, BalanceState, CLEAR_BALANCES } from './types';

const INITIAL_STATE: BalanceState = {
  addresses: [],
  balances: []
};

export const balanceReducer: Reducer<BalanceState, BalanceActions> = (
  state = INITIAL_STATE,
  action
): BalanceState => {
  switch (action.type) {
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
