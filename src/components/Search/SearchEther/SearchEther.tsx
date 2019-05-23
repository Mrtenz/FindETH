import React, { FunctionComponent } from 'react';
import { connect, MapStateToProps } from 'react-redux';
import { ApplicationState } from '../../../store';
import { Table } from '@mycrypto/ui';
import { RouteComponentProps } from '@reach/router';
import { Balance } from '../../../store/network';
import { StyledIdenticon } from './StyledSearchEther';

interface StateProps {
  balances: Balance[];
}

type Props = StateProps & RouteComponentProps;

const truncate = (address: string) => {
  return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
};

const SearchEther: FunctionComponent<Props> = ({ balances }) => (
  <Table
    head={['Address', 'Path', 'Balance']}
    body={balances.map(balance => [
      <div key={balance.address}>
        <StyledIdenticon address={balance.address} />
        {truncate(balance.address)}
      </div>,
      balance.path,
      `${balance.balance} ETH`
    ])}
  />
);

const mapStateToProps: MapStateToProps<StateProps, {}, ApplicationState> = state => ({
  balances: state.network.balances
});

export default connect(mapStateToProps)(SearchEther);
