import { lighten } from 'polished';
import { dark, light, Theme as UITheme } from '@mycrypto/ui';
import lightLogo from '../assets/images/logos/findeth/findeth.svg';
import darkLogo from '../assets/images/logos/findeth/findeth-inverted.svg';

export enum Theme {
  Light,
  Dark
}

interface CustomTheme {
  logo: string;
  primarySectionBackground: string;
  secondarySectionBackground: string;
  darkBackground: string;
  line: string;
  panelShadow: string;
  infoMessageBackground: string;
  warningMessageBackground: string;
  errorMessageBackground: string;
}

export type FindETHTheme = CustomTheme & UITheme;

export const lightTheme: FindETHTheme = {
  ...light,

  background: 'white',
  headline: '#242429',

  logo: lightLogo,
  primarySectionBackground: 'white',
  secondarySectionBackground: '#f6f7f9',
  darkBackground: '#242429',
  line: '#e8eaed',
  panelShadow:
    '0 0 0 0.0625em rgba(0, 0, 0, 0.03), 0 0.0625em 0 0 rgba(0, 0, 0, 0.05), 0 0.0625em 0.1875em 0 rgba(0, 0, 0, 0.1)',
  infoMessageBackground: '#f8f9fa',
  warningMessageBackground: '#ffc107',
  errorMessageBackground: '#dc3545'
};

export const darkTheme: FindETHTheme = {
  ...dark,

  background: '#242429',
  headline: 'white',
  panelBackground: '#242429',
  panelBackgroundDark: lighten(0.06, '#242429'),

  logo: darkLogo,
  primarySectionBackground: '#242429',
  secondarySectionBackground: '#1c1c1f',
  darkBackground: '#242429',
  line: '#545454',
  panelShadow:
    '0 0 0 0.0625rem rgba(80, 80, 80, 0.03), 0 0.0625rem 0 0 rgba(80, 80, 80, 0.05), 0 0.0625rem 0.1875rem 0 rgba(80, 80, 80, 0.1)',
  infoMessageBackground: '#343a40',
  warningMessageBackground: '#b18604',
  errorMessageBackground: '#dc3545'
};

export const themes = {
  [Theme.Light]: lightTheme,
  [Theme.Dark]: darkTheme
};
