import React, { FunctionComponent } from 'react';
import {
  StyledModal,
  StyledModalButton,
  StyledModalButtons,
  StyledModalOverlay
} from './StyledModal';

interface Props {
  isVisible: boolean;
  onClose?(): void;
  onConfirm?(): void;
}

const Modal: FunctionComponent<Props> = ({ isVisible, children, onClose, onConfirm }) => (
  <StyledModalOverlay isVisible={isVisible}>
    <StyledModal isVisible={isVisible}>
      {children}

      <StyledModalButtons>
        {onConfirm && <StyledModalButton onClick={onConfirm}>Confirm</StyledModalButton>}
        <StyledModalButton large={false} secondary={!!onConfirm} onClick={onClose}>
          {(onConfirm && 'Cancel') || 'Close'}
        </StyledModalButton>
      </StyledModalButtons>
    </StyledModal>
  </StyledModalOverlay>
);

export default Modal;
