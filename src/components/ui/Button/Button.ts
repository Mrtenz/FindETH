import styled from 'styled-components';
import { Button as UIButton } from '@mycrypto/ui';

interface Props {
  disabled?: boolean;
}

const Button = styled(UIButton)<Props>`
  margin-top: 18px;
  background: ${({ disabled, theme }) => disabled && theme.buttonDisabledBackground};
  font-size: 1rem;

  &:hover {
    background: ${({ disabled, theme }) => disabled && theme.buttonDisabledBackground};
    cursor: ${({ disabled }) => (disabled && 'default') || 'pointer'};
  }
`;

export default Button;
