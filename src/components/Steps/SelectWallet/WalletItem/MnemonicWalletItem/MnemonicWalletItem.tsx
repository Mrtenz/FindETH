import React, { ChangeEvent, FunctionComponent, useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import keyIcon from '../../../../../assets/images/key.svg';
import MnemonicPhrase from '../../../../../wallets/MnemonicPhrase';
import WalletItem from '../WalletItem';
import Modal from '../../../../ui/Modal';
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';
import { ApplicationState } from '../../../../../store';
import { setImplementation } from '../../../../../store/wallet';
import { Input, Typography } from '@mycrypto/ui';

interface StateProps {
  isLoading: boolean;
}

interface DispatchProps {
  setMnemonicImplementation(implementation: MnemonicPhrase): void;
}

type Props = StateProps & DispatchProps & RouteComponentProps;

const MnemonicWalletItem: FunctionComponent<Props> = ({ setMnemonicImplementation }) => {
  const [isVisible, setVisible] = useState<boolean>(false);
  const [mnemonicPhrase, setMnemonicPhrase] = useState<string>('');
  const [passPhrase, setPassPhrase] = useState<string>('');

  const clearState = () => {
    setMnemonicPhrase('');
    setPassPhrase('');
  };

  const handleClick = () => {
    setVisible(true);
  };

  const handleClose = () => {
    setVisible(false);
    clearState();
  };

  const handleConfirm = () => {
    setVisible(false);

    const implementation = new MnemonicPhrase(mnemonicPhrase, passPhrase);
    setMnemonicImplementation(implementation);
    clearState();
  };

  const handleChangeMnemonicPhrase = (event: ChangeEvent<HTMLInputElement>) => {
    setMnemonicPhrase(event.target.value);
  };

  const handleChangePassPhrase = (event: ChangeEvent<HTMLInputElement>) => {
    setPassPhrase(event.target.value);
  };

  return (
    <>
      <Modal isVisible={isVisible} onClose={handleClose} onConfirm={handleConfirm}>
        <Typography as="label">
          Mnemonic phrase
          <Input
            type="password"
            placeholder="Mnemonic phrase"
            value={mnemonicPhrase}
            onChange={handleChangeMnemonicPhrase}
          />
        </Typography>
        <Typography as="label">
          (Optional) passphrase
          <Input
            type="password"
            placeholder="Passphrase"
            value={passPhrase}
            onChange={handleChangePassPhrase}
          />
        </Typography>
      </Modal>
      <WalletItem
        name="Mnemonic phrase"
        description="Connect using a mnemonic phrase."
        icon={keyIcon}
        onClick={handleClick}
      />
    </>
  );
};

const mapStateToProps: MapStateToProps<StateProps, {}, ApplicationState> = state => ({
  isLoading: state.wallet.isLoading
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = dispatch => ({
  setMnemonicImplementation(implementation: MnemonicPhrase): void {
    dispatch(setImplementation(implementation));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MnemonicWalletItem);
