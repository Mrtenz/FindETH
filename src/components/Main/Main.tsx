import React, { FunctionComponent, useEffect } from 'react';
import { StyledMain } from './StyledMain';
import Web3 from 'web3';
import { connect, MapDispatchToProps } from 'react-redux';
import { connectWeb3 } from '../../store/network';

interface DispatchProps {
  handleConnect(web3: Web3): void;
}

type Props = DispatchProps;

const Main: FunctionComponent<Props> = ({ handleConnect, children }) => {
  useEffect(() => {
    const web3 = new Web3(Web3.givenProvider || 'https://api.mycryptoapi.com/eth');
    handleConnect(web3);
  });

  return <StyledMain>{children}</StyledMain>;
};

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = dispatch => ({
  handleConnect(web3: Web3): void {
    dispatch(connectWeb3(web3));
  }
});

export default connect(
  () => ({}),
  mapDispatchToProps
)(Main);
