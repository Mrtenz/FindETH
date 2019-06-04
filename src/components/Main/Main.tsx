import React, { FunctionComponent, useEffect } from 'react';
import { StyledMain } from './StyledMain';
import { connect, MapDispatchToProps } from 'react-redux';
import { connectProvider, setNetwork } from '../../store/network';
import {
  EtherscanProvider,
  FallbackProvider,
  InfuraProvider,
  JsonRpcProvider,
  Provider,
  Web3Provider
} from '@ethersproject/providers';
import { NETWORK_OFFLINE } from '../../config';

interface Web3 {
  currentProvider: any;
}

declare const window: { web3?: Web3 } & Window;

interface DispatchProps {
  handleConnect(provider: Provider): void;

  handleOffline(): void;
}

type Props = DispatchProps;

const Main: FunctionComponent<Props> = ({ handleConnect, handleOffline, children }) => {
  const initialize = () => {
    const provider =
      window.web3 && window.web3.currentProvider
        ? new Web3Provider(window.web3.currentProvider)
        : new FallbackProvider([
            new JsonRpcProvider('https://api.mycryptoapi.com/eth'),
            new InfuraProvider(),
            new EtherscanProvider()
          ]);

    handleConnect(provider);
  };

  useEffect(() => {
    if (navigator.onLine) {
      initialize();
    }

    window.addEventListener('online', initialize);

    return () => window.removeEventListener('online', initialize);
  });

  useEffect(() => {
    if (!navigator.onLine) {
      handleOffline();
    }

    window.addEventListener('offline', handleOffline);

    return () => window.removeEventListener('offline', handleOffline);
  });

  return <StyledMain>{children}</StyledMain>;
};

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = dispatch => ({
  handleConnect: (provider: Provider) => dispatch(connectProvider(provider)),
  handleOffline: () => dispatch(setNetwork(NETWORK_OFFLINE))
});

export default connect(
  () => ({}),
  mapDispatchToProps
)(Main);
