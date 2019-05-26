import React, { FunctionComponent } from 'react';
import { connect, MapStateToProps } from 'react-redux';
import { ApplicationState } from '../../store';
import { Network } from '../../config';
import { Container } from 'styled-bootstrap-grid';
import Align from '../ui/Align';
import Spinner from '../ui/Spinner';

interface StateProps {
  network?: Network;
}

type Props = StateProps;

const EnsureConnection: FunctionComponent<Props> = ({ network, children }) => {
  if (network) {
    return <>{children}</>;
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
