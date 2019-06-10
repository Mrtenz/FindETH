import React, { FunctionComponent } from 'react';
import { connect, MapStateToProps } from 'react-redux';
import { ApplicationState } from '../../../store';
import Table from '../../ui/Table';
import Typography from '../../ui/Typography';
import { WalletResult, WalletType } from '../../../store/wallet';
import { Balance } from '../../../store/network';
import { default as AddressItem } from '../../ui/Address';
import Spinner from '../../ui/Spinner';
import TextAlign from '../../ui/Align';
import Message from '../../ui/Message';
import Check from '!!react-svg-loader!../../../assets/images/icons/check.svg';
import Cross from '!!react-svg-loader!../../../assets/images/icons/cross.svg';

interface StateProps {
  isSearching: boolean;
  results: WalletResult[];
  balances: Balance[];
}

type Props = StateProps;

const SearchEther: FunctionComponent<Props> = ({ isSearching, results, balances }) => (
  <>
    <Table
      head={['Address', 'Path', 'Balance', 'Password']}
      body={balances
        .filter(balance => balance.balance !== '0')
        .map(balance => [
          <AddressItem
            key={balance.result.address}
            address={balance.result.address}
            truncate={true}
            noMargin={true}
          />,
          balance.result.path,
          `${balance.balance} ETH`,
          balance.result.type === WalletType.MnemonicPhrase ? (
            balance.result.withPassword ? (
              <Check key={`check-${balance.result.address}`} width={25} />
            ) : (
              <Cross key={`cross-${balance.result.address}`} width={25} />
            )
          ) : (
            'N/A'
          )
        ])}
    />
    {(isSearching || results.length > 0) && (
      <TextAlign align="center">
        <Spinner>Loading balances</Spinner>
      </TextAlign>
    )}
    {!isSearching && results.length === 0 && !balances.find(balance => balance.balance !== '0') && (
      <Message type="error" style={{ marginTop: '18px' }}>
        <Typography>No addresses with Ether found.</Typography>
      </Message>
    )}
  </>
);

const mapStateToProps: MapStateToProps<StateProps, {}, ApplicationState> = state => ({
  isSearching: state.search.isSearching,
  results: state.network.results,
  balances: state.network.balances
});

export default connect(mapStateToProps)(SearchEther);
