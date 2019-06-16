import React, { FunctionComponent } from 'react';
import AddressFound from './AddressFound';
import AddressNotFound from './AddressNotFound';
import { connect, MapStateToProps } from 'react-redux';
import { ApplicationState } from '../../../store';
import { WalletResult } from '../../../store/wallet';

interface StateProps {
  addressFound: boolean;
  addressNotFound: boolean;
  result?: WalletResult;
  failedChecks: number;
}

type Props = StateProps;

const SearchAddress: FunctionComponent<Props> = ({
  addressFound,
  addressNotFound,
  result,
  failedChecks
}) => (
  <>
    {addressFound && <AddressFound result={result!} />}
    {addressNotFound && <AddressNotFound failedChecks={failedChecks} />}
  </>
);

const mapStateToProps: MapStateToProps<StateProps, {}, ApplicationState> = state => ({
  addressFound: state.search.addressFound,
  addressNotFound: state.search.addressNotFound,
  result: state.search.result,
  failedChecks: state.search.failedChecks
});

export default connect(mapStateToProps)(SearchAddress);
