import React, { FunctionComponent } from 'react';
import Typography from '../../../ui/Typography';
import { DerivationPath } from '../../../../config';
import { getFullPath } from '../../../../utils';
import Message from '../../../ui/Message';

interface Props {
  path: DerivationPath;
  index: number;
}

const AddressFound: FunctionComponent<Props> = ({ path, index }) => (
  <Message type="info">
    <Typography>Address found at {getFullPath(path, index)}!</Typography>
  </Message>
);

export default AddressFound;
