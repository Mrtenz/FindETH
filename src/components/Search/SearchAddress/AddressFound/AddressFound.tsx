import React, { FunctionComponent } from 'react';
import { Typography } from '@mycrypto/ui';
import { DerivationPath } from '../../../../config';
import { StyledAddressFound } from './StyledAddressFound';
import { getFullPath } from '../../../../utils';

interface Props {
  path: DerivationPath;
  index: number;
}

const AddressFound: FunctionComponent<Props> = ({ path, index }) => (
  <StyledAddressFound>
    <Typography>Address found at {getFullPath(path, index)}!</Typography>
  </StyledAddressFound>
);

export default AddressFound;
