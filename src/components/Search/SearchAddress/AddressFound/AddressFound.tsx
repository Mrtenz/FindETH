import React, { FunctionComponent } from 'react';
import { Typography } from '@mycrypto/ui';
import { DerivationPath } from '../../../../constants';
import { StyledAddressFound } from './StyledAddressFound';

interface Props {
  path: DerivationPath;
  index: number;
}

const AddressFound: FunctionComponent<Props> = ({ path, index }) => (
  <StyledAddressFound>
    <Typography>
      Address found at {path.prefix}/{index}!
    </Typography>
  </StyledAddressFound>
);

export default AddressFound;
