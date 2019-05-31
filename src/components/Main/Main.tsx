import React, { FunctionComponent, useEffect } from 'react';
import { StyledMain } from './StyledMain';
import { connect, MapDispatchToProps } from 'react-redux';
import { connectProvider, setNetwork } from '../../store/network';
import { providers } from 'ethers';
import { NETWORK_OFFLINE } from '../../config';

interface Web3 {
  currentProvider: any;
}

declare const window: { web3?: Web3 } & Window;

interface DispatchProps {
  handleConnect(provider: providers.Provider): void;

  handleOffline(): void;
}

type Props = DispatchProps;

const Main: FunctionComponent<Props> = ({ handleConnect, handleOffline, children }) => {
  const initialize = () => {
    const provider =
      window.web3 && window.web3.currentProvider
        ? new providers.Web3Provider(window.web3.currentProvider)
        : new providers.FallbackProvider([
            new providers.JsonRpcProvider('https://api.mycryptoapi.com/eth'),
            new providers.InfuraProvider(),
            new providers.EtherscanProvider()
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
  handleConnect: (provider: providers.Provider) => dispatch(connectProvider(provider)),
  handleOffline: () => dispatch(setNetwork(NETWORK_OFFLINE))
});

export default connect(
  () => ({}),
  mapDispatchToProps
)(Main);
