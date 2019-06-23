import { Reducer } from 'redux';
import { FETCH_TOKEN, SET_TOKEN, TokensActions, TokensState } from './types';

const INITIAL_STATE: TokensState = {
  isFetching: false
};

export const tokensReducer: Reducer<TokensState, TokensActions> = (
  state = INITIAL_STATE,
  action
): TokensState => {
  switch (action.type) {
    case FETCH_TOKEN:
      return {
        ...state,
        isFetching: true
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload,
        isFetching: false
      };
    default:
      return state;
  }
};
