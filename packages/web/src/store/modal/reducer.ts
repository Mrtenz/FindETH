import { Reducer } from 'redux';
import { ModalActions, ModalState, SHOW_MODAL, SET_VISIBLE } from './types';

const INITIAL_STATE: ModalState = {
  isVisible: false,
  content: ''
};

export const modalReducer: Reducer<ModalState, ModalActions> = (
  state = INITIAL_STATE,
  action
): ModalState => {
  switch (action.type) {
    case SET_VISIBLE:
      return {
        ...state,
        isVisible: action.payload
      };
    case SHOW_MODAL:
      return {
        ...state,
        isVisible: true,
        content: action.payload
      };
    default:
      return state;
  }
};
