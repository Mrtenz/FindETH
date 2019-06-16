import React, { FunctionComponent, useState } from 'react';
import keyIcon from '!!react-svg-loader!../../../../assets/images/icons/key.svg';
import MnemonicPhrase from '../../../../wallets/MnemonicPhrase';
import WalletItem, { handleInitialize } from '../WalletItem';
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';
import { ApplicationState } from '../../../../store';
import Tooltip from '../../../ui/Tooltip';
import MnemonicFlow from '../../../MnemonicFlow';
import { MnemonicFlowResult } from '../../../MnemonicFlow/MnemonicFlow';
import Modal from '../../../ui/Modal';
import { IS_LOCAL } from '../../../../config';
import NotLocal from '../../../LocalCheck/NotLocal';

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
  const [isLocalModalVisible, setLocalModalVisible] = useState<boolean>(false);

  const handleClick = () => {
    if (!IS_LOCAL) {
      return setLocalModalVisible(true);
    }

    setVisible(true);
  };

  const handleClose = () => {
    setVisible(false);
    setLocalModalVisible(false);
  };

  const handleDone = ({ mnemonicPhrase, password }: MnemonicFlowResult) => {
    setVisible(false);

    const implementation = new MnemonicPhrase(mnemonicPhrase, password);
    setMnemonicImplementation(implementation);
  };

  return (
    <>
      <MnemonicFlow isVisible={isVisible} onDone={handleDone} onClose={handleClose} />
      <Modal isVisible={isLocalModalVisible} onClose={handleClose}>
        <NotLocal />
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
