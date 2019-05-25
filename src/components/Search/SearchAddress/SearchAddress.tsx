import React, { FunctionComponent } from 'react';
import AddressFound from './AddressFound';
import AddressNotFound from './AddressNotFound';
import { DerivationPath } from '../../../config';
import { connect, MapStateToProps } from 'react-redux';
import { ApplicationState } from '../../../store';
import { RouteComponentProps } from '@reach/router';

interface StateProps {
  currentPath?: DerivationPath;
  currentAddressIndex: number;
  addressFound: boolean;
  addressNotFound: boolean;
  failedChecks: number;
}

type Props = StateProps & RouteComponentProps;

const SearchAddress: FunctionComponent<Props> = ({
  currentPath,
  currentAddressIndex,
  addressFound,
  addressNotFound,
  failedChecks
}) => (
  <>
    {addressFound && <AddressFound path={currentPath!} index={currentAddressIndex} />}
    {addressNotFound && <AddressNotFound failedChecks={failedChecks} />}
  </>
);

const mapStateToProps: MapStateToProps<StateProps, {}, ApplicationState> = state => ({
  currentPath: state.search.currentPath,
  currentAddressIndex: state.search.currentAddressIndex,
  addressFound: state.search.addressFound,
  addressNotFound: state.search.addressNotFound,
  failedChecks: state.search.failedChecks
});

export default connect(mapStateToProps)(SearchAddress);
