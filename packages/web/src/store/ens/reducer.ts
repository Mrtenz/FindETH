import { Reducer } from 'redux';
import { EnsActions, EnsState, RESOLVE_NAME, SET_RESOLVED_ADDRESS } from './types';

const INITIAL_STATE: EnsState = {
  isResolving: false
};

export const ensReducer: Reducer<EnsState, EnsActions> = (
  state = INITIAL_STATE,
  action
): EnsState => {
  switch (action.type) {
    case RESOLVE_NAME:
      return {
        ...state,
        isResolving: true
      };
    case SET_RESOLVED_ADDRESS:
      return {
        ...state,
        resolvedAddress: action.payload,
        isResolving: false
      };
    default:
      return state;
  }
};
