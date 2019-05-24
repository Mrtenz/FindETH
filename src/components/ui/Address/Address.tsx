import React, { FunctionComponent } from 'react';
import { StyledAddressContainer, StyledIdenticon, StyledTypography } from './StyledAddress';

interface Props {
  address: string;
  truncate?: boolean;
  noMargin?: boolean;
}

const truncateAddress = (address: string) => {
  return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
};

const Address: FunctionComponent<Props> = ({ address, truncate = false, noMargin = false }) => (
  <StyledAddressContainer noMargin={noMargin}>
    <StyledIdenticon address={address} />
    <StyledTypography muted={true}>
      {truncate ? truncateAddress(address) : address}
    </StyledTypography>
  </StyledAddressContainer>
);

export default Address;
