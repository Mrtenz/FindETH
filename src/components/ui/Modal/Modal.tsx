import React, { FunctionComponent, ReactElement } from 'react';
import { StyledModal, ModalButtons, StyledModalOverlay } from './StyledModal';
import Button from '../Button';

interface Props {
  isVisible: boolean;
  buttons?: ReactElement | null;
  onClose?(): void;
  onConfirm?(): void;
}

const Modal: FunctionComponent<Props> = ({ isVisible, children, onClose, onConfirm, buttons }) => (
  <StyledModalOverlay isVisible={isVisible}>
    <StyledModal isVisible={isVisible}>
      {children}

      {buttons !== undefined ? (
        buttons
      ) : (
        <ModalButtons>
          {onConfirm && <Button onClick={onConfirm}>Confirm</Button>}
          <Button large={false} secondary={!!onConfirm} onClick={onClose}>
            {(onConfirm && 'Cancel') || 'Close'}
          </Button>
        </ModalButtons>
      )}
    </StyledModal>
  </StyledModalOverlay>
);

export default Modal;
