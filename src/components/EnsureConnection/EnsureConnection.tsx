import React, { FunctionComponent } from 'react';
import { connect, MapStateToProps } from 'react-redux';
import { ApplicationState } from '../../store';
import { Network } from '../../config';
import { Container } from 'styled-bootstrap-grid';
import Align from '../ui/Align';
import Spinner from '../ui/Spinner';
import { Heading, Typography } from '@mycrypto/ui';

interface StateProps {
  network?: Network;
}

type Props = StateProps;

const EnsureConnection: FunctionComponent<Props> = ({ network, children }) => {
  if (network && network.name === 'Mainnet') {
    return <>{children}</>;
  }

  if (network && network.name === 'Offline') {
    return (
      <Container>
        <Heading as="h2">No network connection</Heading>
        <Typography>This feature requires an internet connection.</Typography>
      </Container>
    );
  }

  if (network && network.name !== 'Mainnet') {
    return (
      <Container>
        <Heading as="h2">Invalid network</Heading>
        <Typography>Please connect to the main Ethereum network.</Typography>
      </Container>
    );
  }

  return (
    <Container>
      <Align align="center">
        <Spinner>Connecting to network...</Spinner>
      </Align>
    </Container>
  );
};

const mapStateToProps: MapStateToProps<StateProps, {}, ApplicationState> = state => ({
  network: state.network.current
});

export default connect(mapStateToProps)(EnsureConnection);
