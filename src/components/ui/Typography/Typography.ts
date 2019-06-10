import styled, { css } from '../../../styles';
import { ClassAttributes, HTMLAttributes } from 'react';
import { Typography as UITypography } from '@mycrypto/ui';
import { fluidRange } from 'polished';

interface OwnProps {
  noMargin?: boolean;
  large?: boolean;
  small?: boolean;
}

/**
 * Props defined in `@mycrypto/ui`.
 */
interface TypographyProps {
  muted?: boolean | undefined;
  as?: string | undefined;
}

type Props = OwnProps &
  TypographyProps &
  ClassAttributes<HTMLParagraphElement> &
  HTMLAttributes<HTMLParagraphElement>;

const Typography = styled(UITypography)<Props>`
  margin: ${({ noMargin }) => (noMargin ? '0' : '1rem')} 0;

  ${fluidRange({ prop: 'font-size', fromSize: '1rem', toSize: '1.125rem' }, '0px', '1000px')};

  ${({ large }) =>
    large &&
    css`
      font-size: 1.5625rem;
    `};

  ${({ small }) =>
    small &&
    css`
      font-size: 0.9375rem;
    `};
`;

export default Typography;
