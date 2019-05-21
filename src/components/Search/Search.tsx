import React, { FunctionComponent } from 'react';
import { Heading, Typography } from '@mycrypto/ui';
import { connect, MapStateToProps } from 'react-redux';
import { DerivationPath } from '../../constants';
import { ApplicationState } from '../../store';
import { RouteComponentProps } from '@reach/router';
import { Container } from 'styled-bootstrap-grid';
import { BigTypography } from './StyledSearch';
import AddressFound from './AddressFound';
import AddressNotFound from './AddressNotFound';

interface StateProps {
  currentPath?: DerivationPath;
  currentIndex: number;
  currentAddressIndex: number;
  depth: number;
  derivationPaths: DerivationPath[];
  addressFound: boolean;
  addressNotFound: boolean;
  failedChecks: number;
}

type Props = StateProps & RouteComponentProps;

const Search: FunctionComponent<Props> = ({
  currentPath,
  currentIndex,
  currentAddressIndex,
  depth,
  derivationPaths,
  addressFound,
                                            addressNotFound,
                                            failedChecks
}) => {
  const total = depth * derivationPaths.length;
  const processed = currentIndex * depth + currentAddressIndex;

  return (
    <Container>
      <Heading as="h2">Searching for address...</Heading>
      <Typography>This may take a while.</Typography>
      <BigTypography>
        {processed} / {total} addresses
      </BigTypography>
      {currentPath && (
        <Typography muted={true}>
          {currentPath.prefix}/{currentAddressIndex}
        </Typography>
      )}
      {addressFound && <AddressFound path={currentPath!} index={currentAddressIndex} />}
      {addressNotFound && <AddressNotFound failedChecks={failedChecks}/>}
    </Container>
  );
};

const mapStateToProps: MapStateToProps<StateProps, {}, ApplicationState> = state => ({
  currentPath: state.search.currentPath,
  currentIndex: state.search.currentIndex,
  currentAddressIndex: state.search.currentAddressIndex,
  depth: state.search.depth,
  derivationPaths: state.search.derivationPaths,
  addressFound: state.search.addressFound,
  addressNotFound: state.search.addressNotFound,
  failedChecks: state.search.failedChecks
});

export default connect(mapStateToProps)(Search);
