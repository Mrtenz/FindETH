import React, { FunctionComponent, useState } from 'react';
import { StyledHeading } from './StyledHeader';
import { connect, MapStateToProps } from 'react-redux';
import { ApplicationState } from '../../../store';
import Modal from '../Modal';
import { Network } from '../../../config';
import { Network as NetworkIndicator } from '@mycrypto/ui';
import Typography from '../Typography';
import { RouteComponentProps, withRouter } from 'react-router';
import Logo from './Logo';
import Container from '../Container';

interface StateProps {
  isSearching: boolean;
  network?: Network;
}

type Props = StateProps & RouteComponentProps;

export const Header: FunctionComponent<Props> = ({ isSearching, network, history }) => {
  const [isVisible, setVisible] = useState<boolean>(false);

  const handleClick = () => {
    if (isSearching) {
      setVisible(true);
      return;
    }

    handleConfirm();
  };

  const handleConfirm = () => {
    history.push('/');
    setVisible(false);
  };

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <Container as="header">
      <Modal isVisible={isVisible} onConfirm={handleConfirm} onClose={handleClose}>
        <Typography>Are you sure you want to stop searching?</Typography>
      </Modal>
      <StyledHeading as="h1">
        <Logo onClick={handleClick} />
      </StyledHeading>
      {network && <NetworkIndicator color={network.color}>{network.name}</NetworkIndicator>}
    </Container>
  );
};

const mapStateToProps: MapStateToProps<StateProps, {}, ApplicationState> = state => ({
  isSearching: state.search.isSearching,
  network: state.network.current
});

export default withRouter(connect(mapStateToProps)(Header));
