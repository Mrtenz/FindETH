import { Action } from 'redux';

export interface ModalState {
  isVisible: boolean;
  content: string;
}

export const SET_VISIBLE = 'SET_VISIBLE';
export interface SetVisibleAction extends Action {
  type: typeof SET_VISIBLE;
  payload: boolean;
}

export const SHOW_MODAL = 'SHOW_MODAL';
export interface ShowModalAction extends Action {
  type: typeof SHOW_MODAL;
  payload: string;
}

export type ModalActions = SetVisibleAction | ShowModalAction;
