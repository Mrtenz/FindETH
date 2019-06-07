import { light, Theme } from '@mycrypto/ui';

interface CustomTheme {
  primarySectionBackground: string;
  secondarySectionBackground: string;
  darkBackground: string;
  line: string;
}

export type FindETHTheme = CustomTheme & Theme;

export const lightTheme: FindETHTheme = {
  ...light,

  primarySectionBackground: 'white',
  secondarySectionBackground: '#f6f7f9',
  darkBackground: '#242429',
  line: '#e8eaed'
};
