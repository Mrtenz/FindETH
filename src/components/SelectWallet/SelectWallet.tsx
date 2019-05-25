import React, { FunctionComponent } from 'react';
import { ItemContainer } from './StyledSelectWallet';
import { connect, MapStateToProps } from 'react-redux';
import { Heading, Typography } from '@mycrypto/ui';
import WalletItem from './WalletItem';
import MnemonicWalletItem from './WalletItem/MnemonicWalletItem';
import LedgerWalletItem from './WalletItem/LedgerWalletItem';
import ledgerIcon from '../../assets/images/logos/ledger.svg';
import LedgerBLE from '../../wallets/ledger/LedgerBLE';
import trezorIcon from '../../assets/images/logos/trezor.svg';
import Trezor from '../../wallets/Trezor';
import Loader from '../ui/Loader';
import { ApplicationState } from '../../store';
import { Row } from 'styled-bootstrap-grid';
import { FlowProps } from '../Flow/Flow';

interface StateProps {
  isLoading: boolean;
}

type Props = StateProps & FlowProps;

const SelectWallet: FunctionComponent<Props> = ({ isLoading, onNext }) => (
  <Loader isVisible={isLoading}>
    <Typography>Select a wallet type to get started.</Typography>
    <Row>
      <ItemContainer>
        <LedgerWalletItem onNext={onNext} />
        <WalletItem
          name="Trezor Device"
          description="Connect using your Trezor device."
          icon={trezorIcon}
          wallet={Trezor}
          onNext={onNext}
        />
      </ItemContainer>
    </Row>
    <Row>
      <ItemContainer>
        <WalletItem
          name="Ledger Device (Bluetooth)"
          description="Connect using your Ledger device."
          icon={ledgerIcon}
          wallet={LedgerBLE}
          onNext={onNext}
        />
        <MnemonicWalletItem onNext={onNext} />
      </ItemContainer>
    </Row>
  </Loader>
);

const mapStateToProps: MapStateToProps<StateProps, {}, ApplicationState> = state => ({
  isLoading: state.wallet.isLoading
});

export default connect(mapStateToProps)(SelectWallet);
