import { ActionCreator } from 'redux';
import { RESOLVE_NAME, ResolveNameAction, SET_RESOLVED_ADDRESS, SetResolvedAddress } from './types';

export const resolveName: ActionCreator<ResolveNameAction> = (payload: string) => ({
  type: RESOLVE_NAME,
  payload
});

export const setResolvedAddress: ActionCreator<SetResolvedAddress> = (payload?: string) => ({
  type: SET_RESOLVED_ADDRESS,
  payload
});
