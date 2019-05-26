import { ActionCreator } from 'redux';
import { FETCH_TOKEN, FetchTokenAction, SET_TOKEN, SetTokenAction, Token } from './types';

export const fetchToken: ActionCreator<FetchTokenAction> = (payload: string) => ({
  type: FETCH_TOKEN,
  payload
});

export const setToken: ActionCreator<SetTokenAction> = (payload?: Token) => ({
  type: SET_TOKEN,
  payload
});
