import React, { FunctionComponent } from 'react';
import Typography from '../../../ui/Typography';
import Message from '../../../ui/Message';

interface Props {
  failedChecks: number;
}

const AddressNotFound: FunctionComponent<Props> = ({ failedChecks }) => (
  <Message type="error">
    <Typography>
      Address not found. {failedChecks > 0 && `Failed to check ${failedChecks} addresses.`}
    </Typography>
  </Message>
);

export default AddressNotFound;
