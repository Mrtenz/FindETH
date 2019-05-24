import { Action } from 'redux';

export interface EnsState {
  isResolving: boolean;
  resolvedAddress?: string;
}

export const RESOLVE_NAME = 'RESOLVE_NAME';
export interface ResolveNameAction extends Action {
  type: typeof RESOLVE_NAME;
  payload: string;
}

export const SET_RESOLVED_ADDRESS = 'SET_RESOLVED_ADDRESS';
export interface SetResolvedAddress extends Action {
  type: typeof SET_RESOLVED_ADDRESS;
  payload?: string;
}

export type EnsActions = ResolveNameAction | SetResolvedAddress;
