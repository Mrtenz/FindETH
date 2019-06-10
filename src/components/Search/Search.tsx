import React, { FunctionComponent } from 'react';
import Typography from '../ui/Typography';
import { connect, MapStateToProps } from 'react-redux';
import { DerivationPath, SearchType } from '../../config';
import { ApplicationState } from '../../store';
import SearchAddress from './SearchAddress';
import SearchEther from './SearchEther';
import SearchToken from './SearchToken';
import { getFullPath } from '../../utils';
import HowToAccess from './HowToAccess/HowToAccess';
import { Route, Switch } from 'react-router';
import Page from '../ui/Page';
import Section from '../ui/Section';
import Heading from '../ui/Heading';

interface StateProps {
  isSearching: boolean;
  currentPath?: DerivationPath;
  currentIndex: number;
  currentAddressIndex: number;
  depth: number;
  derivationPaths: DerivationPath[];
  type: SearchType;
}

type Props = StateProps;

const getName = (type: SearchType): string => {
  switch (type) {
    case SearchType.Address:
      return 'address';
    case SearchType.Ether:
      return 'Ether';
    case SearchType.Token:
      return 'token';
  }
};

const Search: FunctionComponent<Props> = ({
  isSearching,
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
    <Page>
      <Section paddingTop={false}>
        {isSearching ? (
          <Heading as="h2">Searching for {getName(type)}...</Heading>
        ) : (
          <Heading as="h2">Search completed</Heading>
        )}
        {isSearching && <Typography>This may take a while.</Typography>}
        <Typography large={true}>
          {processed} / {total} addresses
        </Typography>
        {currentPath && (
          <Typography muted={true}>{getFullPath(currentPath, currentAddressIndex)}</Typography>
        )}

        <Switch>
          <Route exact={true} path="/search/address" component={SearchAddress} />
          <Route exact={true} path="/search/ether" component={SearchEther} />
          <Route exact={true} path="/search/token" component={SearchToken} />
        </Switch>

        <HowToAccess />
      </Section>
    </Page>
  );
};

const mapStateToProps: MapStateToProps<StateProps, {}, ApplicationState> = state => ({
  isSearching: state.search.isSearching,
  currentPath: state.search.currentPath,
  currentIndex: state.search.currentIndex,
  currentAddressIndex: state.search.currentAddressIndex,
  depth: state.search.depth,
  derivationPaths: state.search.derivationPaths,
  type: state.search.type
});

export default connect(mapStateToProps)(Search);
