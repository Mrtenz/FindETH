import styled from 'styled-components';
import { Button } from '@mycrypto/ui';

interface Props {
  disabled?: boolean;
}

export const StyledButton = styled(Button)<Props>`
  margin-top: 18px;
  background: ${({ disabled, theme }) => disabled && theme.switchBackgroundGreyable};

  &:hover {
    background: ${({ disabled, theme }) => disabled && theme.switchBackgroundGreyable};
    cursor: ${({ disabled }) => (disabled && 'default') || 'pointer'};
  }
`;
