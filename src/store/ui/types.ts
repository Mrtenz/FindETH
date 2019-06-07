import { Action } from 'redux';
import { Theme } from '../../styles';

export interface UIState {
  theme: Theme;
}

export const SET_THEME = 'SET_THEME';
export interface SetThemeAction extends Action {
  type: typeof SET_THEME;
  payload: Theme;
}

export type UIActions = SetThemeAction;
