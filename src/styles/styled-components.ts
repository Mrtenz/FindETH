import * as styledComponents from 'styled-components';
import { FindETHTheme } from './theme';

/**
 * https://github.com/MyCryptoHQ/ui/blob/90612077411d89385ccc35d96e40828f60c5c974/src/styled-components.ts
 */
const {
  default: styled,
  createGlobalStyle,
  css,
  keyframes,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<FindETHTheme>;

export { createGlobalStyle, css, keyframes, ThemeProvider };

export type StyledProps<Props> = styledComponents.ThemedOuterStyledProps<Props, FindETHTheme>;

export default styled;
