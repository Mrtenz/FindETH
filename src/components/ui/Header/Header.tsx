import React, { FunctionComponent } from 'react';
import { Container } from 'styled-bootstrap-grid';
import { StyledHeading } from './StyledHeader';
import { connect, MapStateToProps } from 'react-redux';
import { ApplicationState } from '../../../store';
import { history } from '../../../App';

interface StateProps {
  isSearching: boolean;
}

type Props = StateProps;

const Header: FunctionComponent<Props> = ({ isSearching }) => {
  const handleClick = () => {
    if (isSearching && !confirm('Are you sure you want to cancel?')) {
      return;
    }

    history.navigate('/');
  };

  return (
    <Container>
      <StyledHeading as='h1' onClick={handleClick}>FindETH</StyledHeading>
    </Container>
  );
};

const mapStateToProps: MapStateToProps<StateProps, {}, ApplicationState> = (state) => ({
  isSearching: state.search.isSearching
});

export default connect(mapStateToProps)(Header);
