import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from '@reach/router';
import Flow from '../Flow';
import SelectWallet from '../SelectWallet';
import SelectOptions from '../SelectOptions';
import { connect, MapDispatchToProps } from 'react-redux';
import { search } from '../../store/search';
import { history } from '../../App';

interface DispatchProps {
  handleDone(): void;
}

type Props = DispatchProps & RouteComponentProps;

const EtherFlow: FunctionComponent<Props> = ({ handleDone }) => {
  return <Flow components={[SelectWallet, SelectOptions]} onDone={handleDone} />;
};

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = dispatch => ({
  handleDone(): void {
    history.navigate('/search/ether');
    dispatch(search());
  }
});

export default connect(
  null,
  mapDispatchToProps
)(EtherFlow);
