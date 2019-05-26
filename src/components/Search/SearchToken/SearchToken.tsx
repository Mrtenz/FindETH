import React, { FunctionComponent } from 'react';
import { connect, MapStateToProps } from 'react-redux';
import { ApplicationState } from '../../../store';
import { Table, Typography } from '@mycrypto/ui';
import { RouteComponentProps } from '@reach/router';
import { Address, Balance } from '../../../store/network';
import { default as AddressItem } from '../../ui/Address';
import Spinner from '../../ui/Spinner';
import TextAlign from '../../ui/Align';
import Message from '../../ui/Message';
import { Token } from '../../../store/tokens';

interface StateProps {
  isSearching: boolean;
  addresses: Address[];
  balances: Balance[];
  token: Token;
}

type Props = StateProps & RouteComponentProps;

const SearchToken: FunctionComponent<Props> = ({ isSearching, addresses, balances, token }) => (
  <>
    <Table
      head={['Address', 'Path', 'Balance']}
      body={balances
        .filter(balance => balance.balance !== '0.0')
        .map(balance => [
          <AddressItem
            key={balance.address}
            address={balance.address}
            truncate={true}
            noMargin={true}
          />,
          balance.path,
          `${balance.balance} ${token.symbol}`
        ])}
    />
    {(isSearching || addresses.length > 0) && (
      <TextAlign align="center">
        <Spinner>Loading balances</Spinner>
      </TextAlign>
    )}
    {!isSearching && addresses.length === 0 && balances.length === 0 && (
      <Message type="error" style={{ marginTop: '18px' }}>
        <Typography>No addresses with {token.name} found.</Typography>
      </Message>
    )}
  </>
);

const mapStateToProps: MapStateToProps<StateProps, {}, ApplicationState> = state => ({
  isSearching: state.search.isSearching,
  addresses: state.network.addresses,
  balances: state.network.balances,
  token: state.tokens.token!
});

export default connect(mapStateToProps)(SearchToken);
