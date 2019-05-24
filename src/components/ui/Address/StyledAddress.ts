import styled from 'styled-components';
import { Typography, Identicon } from '@mycrypto/ui';

export const StyledAddressContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 18px;
`;

export const StyledTypography = styled(Typography)`
  margin: 0;
`;

export const StyledIdenticon = styled(Identicon)`
  margin-right: 18px;

  & img {
    width: 35px;
    height: 35px;
  }
`;
