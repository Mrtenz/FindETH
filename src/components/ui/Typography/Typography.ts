import styled, { css } from '../../../styles';
import { ClassAttributes, HTMLAttributes } from 'react';
import { Typography as UITypography } from '@mycrypto/ui';

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
