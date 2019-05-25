import React, { FunctionComponent } from 'react';
import { Heading, Typography } from '@mycrypto/ui';
import { connect, MapStateToProps } from 'react-redux';
import { DerivationPath, SearchType } from '../../config';
import { ApplicationState } from '../../store';
import { RouteComponentProps, Router } from '@reach/router';
import { Container } from 'styled-bootstrap-grid';
import { BigTypography } from './StyledSearch';
import SearchAddress from './SearchAddress';
import SearchEther from './SearchEther';
import { getFullPath } from '../../utils';

interface StateProps {
  currentPath?: DerivationPath;
  currentIndex: number;
  currentAddressIndex: number;
  depth: number;
  derivationPaths: DerivationPath[];
  type: SearchType;
}

type Props = StateProps & RouteComponentProps;

const Search: FunctionComponent<Props> = ({
  currentPath,
  currentIndex,
  currentAddressIndex,
  depth,
  derivationPaths,
  type
}) => {
  const total = depth * derivationPaths.length;
  const processed = currentIndex * depth + currentAddressIndex;

  return (
    <Container>
      <Heading as="h2">Searching for {type === SearchType.Ether ? 'Ether' : 'address'}...</Heading>
      <Typography>This may take a while.</Typography>
      <BigTypography>
        {processed} / {total} addresses
      </BigTypography>
      {currentPath && (
        <Typography muted={true}>{getFullPath(currentPath, currentAddressIndex)}</Typography>
      )}

      <Router basepath="/search">
        <SearchAddress path="address" />
        <SearchEther path="ether" />
      </Router>
    </Container>
  );
};

const mapStateToProps: MapStateToProps<StateProps, {}, ApplicationState> = state => ({
  currentPath: state.search.currentPath,
  currentIndex: state.search.currentIndex,
  currentAddressIndex: state.search.currentAddressIndex,
  depth: state.search.depth,
  derivationPaths: state.search.derivationPaths,
  type: state.search.type
});

export default connect(mapStateToProps)(Search);
