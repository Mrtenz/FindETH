import React, { FunctionComponent } from 'react';
import StyledWalletItem from './StyledWalletItem';
import { Heading, Typography } from '@mycrypto/ui';
import styled from 'styled-components';
import Wallet from '../../../wallets/Wallet';
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';
import { setImplementation, setLoading } from '../../../store/wallet';
import { ApplicationState } from '../../../store';
import { setDerivationPaths } from '../../../store/search';
import { showModal } from '../../../store/modal';
import { AnyAction, Dispatch } from 'redux';

const AccountTypeImage = styled.img`
  max-width: 100px;
  max-height: 100px;
`;

interface OwnProps {
  name: string;
  description: string;
  icon: string;
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

const WalletItem: FunctionComponent<Props> = ({
  name,
  description,
  icon,
  handleClick,
  onClick
}) => {
  return (
    <StyledWalletItem onClick={onClick || handleClick}>
      <Heading as="h3">{name}</Heading>
      <AccountTypeImage src={icon} alt={name} />
      <Typography muted={true}>{description}</Typography>
    </StyledWalletItem>
  );
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
