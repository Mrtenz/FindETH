import React, { FunctionComponent } from 'react';
import { WalletResult, WalletType } from '../../../../store/wallet';
import Typography from '../../../ui/Typography';
import Message from '../../../ui/Message';

interface Props {
  result: WalletResult;
}

const AddressFound: FunctionComponent<Props> = ({ result }) => {
  const indicator =
    result.type === WalletType.MnemonicPhrase
      ? result.withPassword
        ? "Make sure you're using the password you entered previously, in order to access the address."
        : "Make sure you're not using a password, in order to access the address."
      : null;

  return (
    <Message type="info">
      <Typography>
        Address found at {result.path}! {indicator}
      </Typography>
    </Message>
  );
};

export default AddressFound;
