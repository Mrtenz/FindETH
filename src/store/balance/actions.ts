import { ActionCreator } from 'redux';
import {
  ADD_ADDRESS,
  ADD_BALANCE,
  AddAddressAction,
  AddBalanceAction,
  Address,
  Balance,
  CLEAR_BALANCES,
  ClearBalancesAction
} from './types';

export const clearBalances: ActionCreator<ClearBalancesAction> = () => ({
  type: CLEAR_BALANCES
});

export const addAddress: ActionCreator<AddAddressAction> = (payload: Address) => ({
  type: ADD_ADDRESS,
  payload
});

export const addBalance: ActionCreator<AddBalanceAction> = (payload: Balance) => ({
  type: ADD_BALANCE,
  payload
});
