import React, { FunctionComponent, useEffect } from 'react';
import { StyledMain } from './StyledMain';
import { connect, MapDispatchToProps } from 'react-redux';
import { connectProvider } from '../../store/network';
import {
  EtherscanProvider,
  FallbackProvider,
  InfuraProvider,
  JsonRpcProvider,
  Provider,
  Web3Provider
} from '@ethersproject/providers';

interface DispatchProps {
  handleConnect(provider: Provider): void;
}

type Props = DispatchProps;

const Main: FunctionComponent<Props> = ({ handleConnect, children }) => {
  useEffect(() => {
    const provider =
      (window as any).web3 && (window as any).web3.currentProvider
        ? new Web3Provider((window as any).web3.currentProvider)
        : new JsonRpcProvider('https://api.mycryptoapi.com/eth');

    const fallback = new FallbackProvider([
      provider,
      new InfuraProvider(),
      new EtherscanProvider()
    ]);

    handleConnect(fallback);
  });

  return <StyledMain>{children}</StyledMain>;
};

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = dispatch => ({
  handleConnect(provider: Provider): void {
    dispatch(connectProvider(provider));
  }
});

export default connect(
  () => ({}),
  mapDispatchToProps
)(Main);
