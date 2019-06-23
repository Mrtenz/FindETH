import { ActionCreator } from 'redux';
import { SET_THEME, SetThemeAction } from './types';
import { Theme } from '../../styles';

export const setTheme: ActionCreator<SetThemeAction> = (payload: Theme) => ({
  type: SET_THEME,
  payload
});
