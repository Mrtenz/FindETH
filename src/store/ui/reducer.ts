import { Reducer } from 'redux';
import { SET_THEME, UIActions, UIState } from './types';
import { Theme } from '../../styles';
import { hydrate, persist } from '../persist';

const LOCAL_STORAGE_KEY = 'redux-ui';

const INITIAL_STATE: UIState = hydrate(LOCAL_STORAGE_KEY, {
  theme: Theme.Light
});

const reducer: Reducer<UIState, UIActions> = (state = INITIAL_STATE, action): UIState => {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        theme: action.payload
      };
    default:
      return state;
  }
};

export const uiReducer = persist(LOCAL_STORAGE_KEY, reducer);
