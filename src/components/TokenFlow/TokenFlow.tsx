import React, { FunctionComponent } from 'react';
import Flow from '../Flow';
import SelectWallet from '../SelectWallet/SelectWallet';
import SelectOptions from '../SelectOptions';
import { connect, MapDispatchToProps } from 'react-redux';
import { search } from '../../store/search';
import { SearchType } from '../../config';
import SelectToken from '../SelectToken';
import { RouteComponentProps, withRouter } from 'react-router';
import EnsureConnection from '../EnsureConnection/EnsureConnection';
import BrowserCheck from '../BrowserCheck';

interface DispatchProps {
  handleDone(): void;
}

type Props = DispatchProps & RouteComponentProps;

const TokenFlow: FunctionComponent<Props> = ({ handleDone }) => (
  <BrowserCheck>
    <EnsureConnection>
      <Flow
        components={[
          {
            title: 'Select your token',
            Component: SelectToken
          },
          {
            title: 'Unlock your account',
            Component: SelectWallet
          },
          {
            title: 'Choose your options',
            Component: SelectOptions
          }
        ]}
        onDone={handleDone}
      />
    </EnsureConnection>
  </BrowserCheck>
);

const mapDispatchToProps: MapDispatchToProps<DispatchProps, RouteComponentProps> = (
  dispatch,
  { history }
) => ({
  handleDone(): void {
    history.push('/search/token');
    dispatch(search(SearchType.Token));
  }
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(TokenFlow)
);
