import styled from 'styled-components';
import { Identicon } from '@mycrypto/ui';

interface Props {
  noMargin: boolean;
}

export const StyledAddressContainer = styled.div<Props>`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: ${({ noMargin }) => (noMargin ? '0' : '18px')};
`;

export const StyledIdenticon = styled(Identicon)`
  margin-right: 18px;

  & img {
    width: 35px;
    height: 35px;
  }
`;
