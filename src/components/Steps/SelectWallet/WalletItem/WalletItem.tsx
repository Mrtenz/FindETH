import React, { FunctionComponent } from 'react';
import StyledWalletItem from './StyledWalletItem';
import { Heading, Typography } from '@mycrypto/ui';
import styled from 'styled-components';
import Wallet from '../../../../wallets/Wallet';
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';
import { setImplementation } from '../../../../store/wallet';
import { ApplicationState } from '../../../../store';

const AccountTypeImage = styled.img`
  max-width: 100px;
  max-height: 100px;
`;

interface OwnProps {
  name: string;
  description: string;
  icon: string;
  wallet: new () => Wallet;
}

interface StateProps {
  isLoading: boolean;
}

interface DispatchProps {
  handleClick(): void;
}

type Props = OwnProps & StateProps & DispatchProps;

const WalletItem: FunctionComponent<Props> = ({ name, description, icon, handleClick }) => {
  return (
    <StyledWalletItem onClick={handleClick}>
      <Heading as="h3">{name}</Heading>
      <AccountTypeImage src={icon} alt={name} />
      <Typography muted={true}>{description}</Typography>
    </StyledWalletItem>
  );
};

const mapStateToProps: MapStateToProps<StateProps, OwnProps, ApplicationState> = state => ({
  isLoading: state.wallet.isLoading
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = (dispatch, { wallet }) => ({
  handleClick(): void {
    const implementation = new wallet();
    dispatch(setImplementation(implementation));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WalletItem);
