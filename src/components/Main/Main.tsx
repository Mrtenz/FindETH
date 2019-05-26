import React, { FunctionComponent, useEffect } from 'react';
import { StyledMain } from './StyledMain';
import { connect, MapDispatchToProps } from 'react-redux';
import { connectProvider } from '../../store/network';
import { providers } from 'ethers';

interface DispatchProps {
  handleConnect(provider: providers.Provider): void;
}

type Props = DispatchProps;

const Main: FunctionComponent<Props> = ({ handleConnect, children }) => {
  useEffect(() => {
    const provider =
      (window as any).web3 && (window as any).web3.currentProvider
        ? new providers.Web3Provider((window as any).web3.currentProvider)
        : new providers.JsonRpcProvider('https://api.mycryptoapi.com/eth');

    const fallback = new providers.FallbackProvider([
      provider,
      new providers.InfuraProvider(),
      new providers.EtherscanProvider()
    ]);

    handleConnect(fallback);
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
