import React, { FunctionComponent } from 'react';
import { StyledAddressContainer, StyledIdenticon } from './StyledAddress';
import Typography from '../Typography';

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
    <Typography noMargin={true} muted={true}>
      {truncate ? truncateAddress(address) : address}
    </Typography>
  </StyledAddressContainer>
);

export default Address;
