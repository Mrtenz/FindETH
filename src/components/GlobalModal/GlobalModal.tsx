import React, { FunctionComponent } from 'react';
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';
import { ApplicationState } from '../../store';
import { setVisible } from '../../store/modal';
import Modal from '../ui/Modal';
import Typography from '../ui/Typography';

interface StateProps {
  isVisible: boolean;
  content: string;
}

interface DispatchProps {
  hide(): void;
}

type Props = StateProps & DispatchProps;

const GlobalModal: FunctionComponent<Props> = ({ isVisible, content, hide }) => (
  <Modal isVisible={isVisible} onClose={hide}>
    <Typography>{content}</Typography>
  </Modal>
);

const mapStateToProps: MapStateToProps<StateProps, {}, ApplicationState> = state => ({
  isVisible: state.modal.isVisible,
  content: state.modal.content
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = dispatch => ({
  hide(): void {
    dispatch(setVisible(false));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GlobalModal);
