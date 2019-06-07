import { SimpleInterpolation, ThemedCssFunction } from 'styled-components';
import { css } from './styled-components';
import { FindETHTheme } from './theme';

/**
 * Breakpoints in pixels.
 */
export const breakpoints = {
  extraSmall: 575,
  small: 576,
  medium: 768,
  large: 992,
  extraLarge: 1200
};

type MinMedia = { [key in keyof typeof breakpoints]: ThemedCssFunction<FindETHTheme> };

interface MaxMedia {
  max: { [key in keyof typeof breakpoints]: ThemedCssFunction<FindETHTheme> };
}

type Media = MinMedia & MaxMedia;

const INITIAL_VALUE: Partial<Media> = {
  extraSmall: (...args: [TemplateStringsArray, ...any[]]) => css`
    @media screen and (max-width: ${breakpoints.extraSmall / 16}rem) {
      ${css(...args)}
    }
  `
};

export const media = Object.keys(breakpoints).reduce<Media>(
  (target, key) => {
    const breakpoint = breakpoints[key as keyof typeof breakpoints];

    return {
      ...target,
      max: {
        ...target.max,
        [key]: (...args: [TemplateStringsArray, ...SimpleInterpolation[]]) => css`
          @media screen and (max-width: ${breakpoint / 16}rem) {
            ${css(...args)}
          }
        `
      },
      [key]: (...args: [TemplateStringsArray, ...SimpleInterpolation[]]) => css`
        @media screen and (min-width: ${breakpoint / 16}rem) {
          ${css(...args)}
        }
      `
    };
  },
  INITIAL_VALUE as any
);
