import React, { FunctionComponent } from 'react';
import { Typography } from '@mycrypto/ui';
import { StyledAddressNotFound } from './StyledAddressNotFound';

interface Props {
  failedChecks: number;
}

const AddressNotFound: FunctionComponent<Props> = ({ failedChecks }) => (
  <StyledAddressNotFound>
    <Typography>
      Address not found :( {failedChecks > 0 && 'Failed to check {failedChecks} addresses.'}
    </Typography>
  </StyledAddressNotFound>
);

export default AddressNotFound;
