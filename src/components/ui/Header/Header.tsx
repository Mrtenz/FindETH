import React, { FunctionComponent, useState } from 'react';
import { StyledHeading } from './StyledHeader';
import { connect, MapStateToProps } from 'react-redux';
import { ApplicationState } from '../../../store';
import Modal from '../Modal';
import Typography from '../Typography';
import { RouteComponentProps, withRouter } from 'react-router';
import Logo from './Logo';
import Container from '../Container';

interface StateProps {
  isSearching: boolean;
}

type Props = StateProps & RouteComponentProps;

export const Header: FunctionComponent<Props> = ({ isSearching, history }) => {
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
    </Container>
  );
};

const mapStateToProps: MapStateToProps<StateProps, {}, ApplicationState> = state => ({
  isSearching: state.search.isSearching
});

export default withRouter(connect(mapStateToProps)(Header));
