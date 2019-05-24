import React, { FunctionComponent } from 'react';
import { StyledAddressContainer, StyledIdenticon, StyledTypography } from './StyledAddress';

interface Props {
  address: string;
}

const Address: FunctionComponent<Props> = ({ address }) => (
  <StyledAddressContainer>
    <StyledIdenticon address={address}>asdsa</StyledIdenticon>
    <StyledTypography muted={true}>{address}</StyledTypography>
  </StyledAddressContainer>
);

export default Address;
