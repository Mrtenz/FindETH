import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from '@reach/router';
import { connect, MapDispatchToProps } from 'react-redux';
import { Button, Heading } from '@mycrypto/ui';
import Paths from './Paths';
import Depth from './Depth';
import { search } from '../../../store/search';

interface DispatchProps {
  handleSearch(): void;
}

type Props = DispatchProps & RouteComponentProps;

const SelectOptions: FunctionComponent<Props> = ({ handleSearch }) => {
  return (
    <>
      <Heading as="h2">Choose your options</Heading>
      <Depth />
      <Paths />
      <Button onClick={handleSearch}>Search</Button>
    </>
  );
};

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = dispatch => ({
  handleSearch(): void {
    dispatch(search());
  }
});

export default connect(
  () => ({}),
  mapDispatchToProps
)(SelectOptions);
