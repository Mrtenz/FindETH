import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from '@reach/router';
import Flow from '../Flow';
import SelectAddress from '../SelectAddress';
import SelectWallet from '../SelectWallet';
import SelectOptions from '../SelectOptions';
import { connect, MapDispatchToProps } from 'react-redux';
import { search } from '../../store/search';
import { history } from '../../App';
import { SearchType } from '../../config';

interface DispatchProps {
  handleDone(): void;
}

type Props = DispatchProps & RouteComponentProps;

const AddressFlow: FunctionComponent<Props> = ({ handleDone }) => {
  return <Flow components={[SelectAddress, SelectWallet, SelectOptions]} onDone={handleDone} />;
};

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = dispatch => ({
  handleDone(): void {
    history.navigate('/search/address');
    dispatch(search(SearchType.Address));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(AddressFlow);
