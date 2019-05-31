import React, { FunctionComponent, useEffect } from 'react';
import { StyledMain } from './StyledMain';
import { connect, MapDispatchToProps } from 'react-redux';
import { connectProvider } from '../../store/network';
import { providers } from 'ethers';

interface Web3 {
  currentProvider: any;
}

declare const window: { web3?: Web3 };

interface DispatchProps {
  handleConnect(provider: providers.Provider): void;
}

type Props = DispatchProps;

const Main: FunctionComponent<Props> = ({ handleConnect, children }) => {
  useEffect(() => {
    const provider =
      window.web3 && window.web3.currentProvider
        ? new providers.Web3Provider(window.web3.currentProvider)
        : new providers.FallbackProvider([
            new providers.JsonRpcProvider('https://api.mycryptoapi.com/eth'),
            new providers.InfuraProvider(),
            new providers.EtherscanProvider()
          ]);

    handleConnect(provider);
  });

  return <StyledMain>{children}</StyledMain>;
};

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = dispatch => ({
  handleConnect(provider: providers.Provider): void {
    dispatch(connectProvider(provider));
  }
});

export default connect(
  () => ({}),
  mapDispatchToProps
)(Main);
