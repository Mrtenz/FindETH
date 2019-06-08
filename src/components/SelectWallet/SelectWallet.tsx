import React, { FunctionComponent } from 'react';
import { connect, MapStateToProps } from 'react-redux';
import Typography from '../ui/Typography';
import WalletItem from './WalletItem';
import MnemonicWalletItem from './WalletItem/MnemonicWalletItem';
import LedgerWalletItem from './WalletItem/LedgerWalletItem';
import ledgerIcon from '!!react-svg-loader!../../assets/images/logos/ledger.svg';
import LedgerBLE from '../../wallets/ledger/LedgerBLE';
import trezorIcon from '!!react-svg-loader!../../assets/images/logos/trezor.svg';
import Trezor from '../../wallets/Trezor';
import Loader from '../ui/Loader';
import { ApplicationState } from '../../store';
import { FlowProps } from '../Flow';
import Align from '../ui/Align';

interface StateProps {
  isLoading: boolean;
}

type Props = StateProps & FlowProps;

const SelectWallet: FunctionComponent<Props> = ({ isLoading, onNext }) => (
  <Loader isVisible={isLoading}>
    <Typography>Select a wallet type to get started.</Typography>
    <Align align="center" flexWrap={true}>
      <LedgerWalletItem onNext={onNext} />
      <WalletItem name="Ledger BLE" icon={ledgerIcon} wallet={LedgerBLE} onNext={onNext} />
      <WalletItem name="Trezor" icon={trezorIcon} wallet={Trezor} onNext={onNext} />
      <MnemonicWalletItem onNext={onNext} />
    </Align>
  </Loader>
);

const mapStateToProps: MapStateToProps<StateProps, {}, ApplicationState> = state => ({
  isLoading: state.wallet.isLoading
});

export default connect(mapStateToProps)(SelectWallet);
