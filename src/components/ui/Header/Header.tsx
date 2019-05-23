import React, { FunctionComponent, useState } from 'react';
import { Col, Container, Row } from 'styled-bootstrap-grid';
import { StyledHeading } from './StyledHeader';
import { connect, MapStateToProps } from 'react-redux';
import { ApplicationState } from '../../../store';
import { history } from '../../../App';
import Modal from '../Modal';
import { Network } from '../../../constants';
import { Network as NetworkIndicator, Typography } from '@mycrypto/ui';

interface StateProps {
  isSearching: boolean;
  network?: Network;
}

type Props = StateProps;

const Header: FunctionComponent<Props> = ({ isSearching, network }) => {
  const [isVisible, setVisible] = useState<boolean>(false);

  const handleClick = () => {
    if (isSearching) {
      setVisible(true);
      return;
    }

    handleConfirm();
  };

  const handleConfirm = () => {
    history.navigate('/');
    setVisible(false);
  };

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <Container>
      <Row alignItems="center">
        <Col col={true}>
          <Modal isVisible={isVisible} onConfirm={handleConfirm} onClose={handleClose}>
            <Typography>Are you sure you want to stop searching?</Typography>
          </Modal>
          <StyledHeading as="h1" onClick={handleClick}>
            FindETH
          </StyledHeading>
        </Col>
        {network && (
          <Col col={true} style={{ textAlign: 'right' }}>
            <NetworkIndicator color={network.color}>{network.name}</NetworkIndicator>
          </Col>
        )}
      </Row>
    </Container>
  );
};

const mapStateToProps: MapStateToProps<StateProps, {}, ApplicationState> = state => ({
  isSearching: state.search.isSearching,
  network: state.network.current
});

export default connect(mapStateToProps)(Header);
