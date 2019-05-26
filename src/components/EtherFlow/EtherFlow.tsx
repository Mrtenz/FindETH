import React, { FunctionComponent } from 'react';
import Flow from '../Flow';
import SelectWallet from '../SelectWallet';
import SelectOptions from '../SelectOptions';
import { connect, MapDispatchToProps } from 'react-redux';
import { search } from '../../store/search';
import { SearchType } from '../../config';
import { RouteComponentProps, withRouter } from 'react-router';

interface DispatchProps {
  handleDone(): void;
}

type Props = DispatchProps & RouteComponentProps;

const EtherFlow: FunctionComponent<Props> = ({ handleDone }) => (
  <Flow
    components={[
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

const mapDispatchToProps: MapDispatchToProps<DispatchProps, RouteComponentProps> = (
  dispatch,
  { history }
) => ({
  handleDone(): void {
    history.push('/search/ether');
    dispatch(search(SearchType.Ether));
  }
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(EtherFlow)
);
