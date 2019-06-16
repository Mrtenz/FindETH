import { ActionCreator } from 'redux';
import {
  SET_IMPLEMENTATION,
  SET_LOADING,
  SetImplementationAction,
  SetLoadingAction
} from './types';
import Wallet from '../../wallets/Wallet';

export const setLoading: ActionCreator<SetLoadingAction> = (payload: boolean) => ({
  type: SET_LOADING,
  payload
});

export const setImplementation: ActionCreator<SetImplementationAction> = (payload: Wallet) => ({
  type: SET_IMPLEMENTATION,
  payload
});
