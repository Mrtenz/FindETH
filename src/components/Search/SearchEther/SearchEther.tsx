import React, { FunctionComponent } from 'react';
import { connect, MapStateToProps } from 'react-redux';
import { ApplicationState } from '../../../store';
import { Table } from '@mycrypto/ui';
import { RouteComponentProps } from '@reach/router';
import { Address, Balance } from '../../../store/network';
import { default as AddressItem } from '../../ui/Address';
import Spinner from '../../ui/Spinner';
import TextAlign from '../../ui/Align';

interface StateProps {
  isSearching: boolean;
  addresses: Address[];
  balances: Balance[];
}

type Props = StateProps & RouteComponentProps;

const SearchEther: FunctionComponent<Props> = ({ isSearching, addresses, balances }) => (
  <>
    <Table
      head={['Address', 'Path', 'Balance']}
      body={balances.map(balance => [
        <AddressItem
          key={balance.address}
          address={balance.address}
          truncate={true}
          noMargin={true}
        />,
        balance.path,
        `${balance.balance} ETH`
      ])}
    />
    {(isSearching || addresses.length > 0) && (
      <TextAlign align="center">
        <Spinner>Loading balances</Spinner>
      </TextAlign>
    )}
  </>
);

const mapStateToProps: MapStateToProps<StateProps, {}, ApplicationState> = state => ({
  isSearching: state.search.isSearching,
  addresses: state.network.addresses,
  balances: state.network.balances
});

export default connect(mapStateToProps)(SearchEther);
