import React, { ChangeEvent, FunctionComponent, useState } from 'react';
import keyIcon from '!!react-svg-loader!../../../../assets/images/icons/key.svg';
import MnemonicPhrase from '../../../../wallets/MnemonicPhrase';
import WalletItem, { handleInitialize } from '../WalletItem';
import Modal from '../../../ui/Modal';
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';
import { ApplicationState } from '../../../../store';
import { Input, Typography } from '@mycrypto/ui';
import Tooltip from '../../../ui/Tooltip';
import LocalCheck from '../../../LocalCheck';
import { IS_LOCAL } from '../../../../config';

interface OwnProps {
  onNext(): void;
}

interface StateProps {
  isLoading: boolean;
}

interface DispatchProps {
  setMnemonicImplementation(implementation: MnemonicPhrase): void;
}

type Props = OwnProps & StateProps & DispatchProps;

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
      <Modal
        isVisible={isVisible}
        onClose={handleClose}
        onConfirm={(IS_LOCAL && handleConfirm) || undefined}
      >
        <LocalCheck>
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
        </LocalCheck>
      </Modal>
      <Tooltip content="This method is only available locally.">
        <WalletItem name="Mnemonic" icon={keyIcon} onClick={handleClick} />
      </Tooltip>
    </>
  );
};

const mapStateToProps: MapStateToProps<StateProps, {}, ApplicationState> = state => ({
  isLoading: state.wallet.isLoading
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = (dispatch, { onNext }) => ({
  setMnemonicImplementation(implementation: MnemonicPhrase): void {
    handleInitialize(dispatch, implementation, onNext);
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MnemonicWalletItem);
