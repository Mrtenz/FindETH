import React, { FunctionComponent } from 'react';
import Wallet from '../../../wallets/Wallet';
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';
import { setImplementation, setLoading } from '../../../store/wallet';
import { ApplicationState } from '../../../store';
import { setDerivationPaths } from '../../../store/search';
import { showModal } from '../../../store/modal';
import { AnyAction, Dispatch } from 'redux';
import ClickablePanel from '../../ui/ClickablePanel';
import { ImageComponent } from 'react-svg-loader';

interface OwnProps {
  name: string;
  icon: ImageComponent;
  wallet?: new () => Wallet;

  onNext?(): void;

  onClick?(): void;
}

interface StateProps {
  isLoading: boolean;
}

interface DispatchProps {
  handleClick(): void;
}

type Props = OwnProps & StateProps & DispatchProps;

const WalletItem: FunctionComponent<Props> = ({ name, icon, handleClick, onClick }) => {
  return <ClickablePanel title={name} icon={icon} onClick={onClick || handleClick} />;
};

const mapStateToProps: MapStateToProps<StateProps, OwnProps, ApplicationState> = state => ({
  isLoading: state.wallet.isLoading
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = (
  dispatch,
  { wallet, onNext }
) => ({
  handleClick(): void {
    if (wallet) {
      handleInitialize(dispatch, new wallet(), onNext);
    }
  }
});

export const handleInitialize = (
  dispatch: Dispatch<AnyAction>,
  implementation: Wallet,
  onNext?: () => void
) => {
  dispatch(setLoading(true));

  implementation
    .initialize()
    .then(() => {
      dispatch(setImplementation(implementation));
      dispatch(setDerivationPaths(implementation.getDerivationPaths()));
      dispatch(setLoading(false));

      if (onNext) {
        onNext();
      }
    })
    .catch(error => {
      console.error(error);
      dispatch(showModal(error.toString()));
      dispatch(setLoading(false));
    });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WalletItem);
