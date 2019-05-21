import { ActionCreator } from 'redux';
import { SET_VISIBLE, SetVisibleAction, SHOW_MODAL, ShowModalAction } from './types';

export const setVisible: ActionCreator<SetVisibleAction> = (payload: boolean) => ({
  type: SET_VISIBLE,
  payload
});

export const showModal: ActionCreator<ShowModalAction> = (payload: string) => ({
  type: SHOW_MODAL,
  payload
});
