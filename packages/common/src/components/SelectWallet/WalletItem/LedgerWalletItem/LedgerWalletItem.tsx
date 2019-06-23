import React, { FunctionComponent, useEffect, useState } from 'react';
import WalletItem from '../WalletItem';
import { LedgerU2F, LedgerUSB } from '@findeth/web';
import TransportWebUSB from '@ledgerhq/hw-transport-webusb';
import ledgerIcon from '!!react-svg-loader!../../../../assets/images/logos/ledger.svg';

interface Props {
  onNext(): void;
}

const LedgerWalletItem: FunctionComponent<Props> = ({ onNext }) => {
  const [isWebUSBSupported, setWebUSBSupported] = useState<boolean>(false);

  useEffect(() => {
    // TODO: Temporary workaround for Ledger USB issues on Windows
    if (!navigator.platform.includes('Win')) {
      TransportWebUSB.isSupported()
        .then(setWebUSBSupported)
        .catch(() => setWebUSBSupported(false));
    }
  }, []);

  return (
    <WalletItem
      name="Ledger"
      icon={ledgerIcon}
      wallet={isWebUSBSupported ? LedgerUSB : LedgerU2F}
      onNext={onNext}
    />
  );
};

export default LedgerWalletItem;
