import React, { FunctionComponent } from 'react';
import { connect, MapStateToProps } from 'react-redux';
import { ApplicationState } from '../../../store';
import { Table } from '@mycrypto/ui';
import { RouteComponentProps } from '@reach/router';
import { Balance } from '../../../store/network';
import Address from '../../ui/Address';

interface StateProps {
  balances: Balance[];
}

type Props = StateProps & RouteComponentProps;

const SearchEther: FunctionComponent<Props> = ({ balances }) => (
  <Table
    head={['Address', 'Path', 'Balance']}
    body={balances.map(balance => [
      <Address key={balance.address} address={balance.address} truncate={true} noMargin={true} />,
      balance.path,
      `${balance.balance} ETH`
    ])}
  />
);

const mapStateToProps: MapStateToProps<StateProps, {}, ApplicationState> = state => ({
  balances: state.network.balances
});

export default connect(mapStateToProps)(SearchEther);
