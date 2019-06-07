import React, { FunctionComponent, ReactElement } from 'react';
import { connect, MapStateToProps } from 'react-redux';
import { ApplicationState } from '../../store';
import { Network } from '../../config';
import Align from '../ui/Align';
import Spinner from '../ui/Spinner';
import Typography from '../ui/Typography';
import Page from '../ui/Page';
import Section from '../ui/Section';
import Heading from '../ui/Heading';

interface StateProps {
  network?: Network;
}

type Props = StateProps;

const EnsureConnection: FunctionComponent<Props> = ({ network, children }) => {
  if (network && network.name === 'Mainnet') {
    return <>{children}</>;
  }

  let message: ReactElement;

  if (network && network.name === 'Offline') {
    message = (
      <>
        <Heading as="h2">No network connection</Heading>
        <Typography>This feature requires an internet connection.</Typography>
      </>
    );
  } else if (network && network.name !== 'Mainnet') {
    message = (
      <>
        <Heading as="h2">Invalid network</Heading>
        <Typography>Please connect to the main Ethereum network.</Typography>
      </>
    );
  } else {
    message = (
      <>
        <Align align="center">
          <Spinner>Connecting to network...</Spinner>
        </Align>
      </>
    );
  }

  return (
    <Page>
      <Section paddingTop={false}>{message}</Section>
    </Page>
  );
};

const mapStateToProps: MapStateToProps<StateProps, {}, ApplicationState> = state => ({
  network: state.network.current
});

export default connect(mapStateToProps)(EnsureConnection);
