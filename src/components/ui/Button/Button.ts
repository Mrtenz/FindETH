import styled from 'styled-components';
import { Button as UIButton } from '@mycrypto/ui';
import { transparentize } from 'polished';

interface Props {
  disabled?: boolean;
}

const Button = styled(UIButton)<Props>`
  margin-top: 18px;
  background: ${({ disabled, theme }) => disabled && theme.buttonDisabledBackground};
  font-size: 1rem;
  color: ${({ theme, disabled, secondary }) =>
    secondary
      ? disabled
        ? transparentize(0.25, theme.primary)
        : theme.primary
      : disabled
      ? transparentize(0.25, 'white')
      : 'white'};

  &:hover {
    background: ${({ disabled, theme }) => disabled && theme.buttonDisabledBackground};
    cursor: ${({ disabled }) => (disabled && 'default') || 'pointer'};
  }
`;

export default Button;
