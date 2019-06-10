import React, { FunctionComponent } from 'react';
import useFlow from '../Flow';
import SelectAddress from '../SelectAddress';
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

const AddressFlow: FunctionComponent<Props> = ({ handleDone }) => {
  // TODO: Refactor complete flow to use local state
  const [, Flow] = useFlow();

  return (
    <Flow
      injectedProps={{}}
      components={[
        {
          title: 'Select your address',
          Component: SelectAddress
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
};

const mapDispatchToProps: MapDispatchToProps<DispatchProps, RouteComponentProps> = (
  dispatch,
  { history }
) => ({
  handleDone(): void {
    history.push('/search/address');
    dispatch(search(SearchType.Address));
  }
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(AddressFlow)
);
