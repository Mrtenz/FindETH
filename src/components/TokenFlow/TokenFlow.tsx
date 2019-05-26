import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from '@reach/router';
import Flow from '../Flow';
import SelectWallet from '../SelectWallet/SelectWallet';
import SelectOptions from '../SelectOptions';
import { connect, MapDispatchToProps } from 'react-redux';
import { history } from '../../App';
import { search } from '../../store/search';
import { SearchType } from '../../config';
import SelectToken from '../SelectToken';

interface DispatchProps {
  handleDone(): void;
}

type Props = DispatchProps & RouteComponentProps;

const TokenFlow: FunctionComponent<Props> = ({ handleDone }) => (
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
);

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = dispatch => ({
  handleDone(): void {
    history.navigate('/search/token');
    dispatch(search(SearchType.Token));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(TokenFlow);
