import React, { FunctionComponent, useState } from 'react';
import { Container } from 'styled-bootstrap-grid';
import { StyledHeading } from './StyledHeader';
import { connect, MapStateToProps } from 'react-redux';
import { ApplicationState } from '../../../store';
import { history } from '../../../App';
import Modal from '../Modal';
import { Typography } from '@mycrypto/ui';

interface StateProps {
  isSearching: boolean;
}

type Props = StateProps;

const Header: FunctionComponent<Props> = ({ isSearching }) => {
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
      <Modal isVisible={isVisible} onConfirm={handleConfirm} onClose={handleClose}>
        <Typography>
          Are you sure you want to stop searching?
        </Typography>
      </Modal>
      <StyledHeading as='h1' onClick={handleClick}>FindETH</StyledHeading>
    </Container>
  );
};

const mapStateToProps: MapStateToProps<StateProps, {}, ApplicationState> = (state) => ({
  isSearching: state.search.isSearching
});

export default connect(mapStateToProps)(Header);
