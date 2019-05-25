import React, { FunctionComponent, useEffect, useState } from 'react';
import WalletItem from '../WalletItem';
import LedgerUSB from '../../../../../wallets/ledger/LedgerUSB';
import LedgerU2F from '../../../../../wallets/ledger/LedgerU2F';
import TransportWebUSB from '@ledgerhq/hw-transport-webusb';
import ledgerIcon from '../../../../../assets/images/logos/ledger.svg';

const LedgerWalletItem: FunctionComponent = () => {
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
      name="Ledger Device"
      description="Connect using your Ledger device."
      icon={ledgerIcon}
      wallet={isWebUSBSupported ? LedgerUSB : LedgerU2F}
    />
  );
};

export default LedgerWalletItem;
