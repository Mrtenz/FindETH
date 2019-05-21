import styled from 'styled-components';
import { Button } from '@mycrypto/ui';

interface Props {
  isVisible: boolean;
}

export const StyledModalOverlay = styled.div<Props>`
  display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${({ isVisible }) => (isVisible ? 'rgba(0, 0, 0, 0.2)' : 'rgba(0, 0, 0, 0)')};
  transition: background 0.2s;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const StyledModal = styled.div<Props>`
  background: white;
  transform: ${({ isVisible }) => (isVisible ? 'scale(1)' : 'scale(0.8)')};
  transition: transform 0.2s;
  padding: 18px;
  width: 400px;
  border-radius: 3px;
`;

export const StyledModalButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 18px;
`;

export const StyledModalButton = styled(Button)`
  padding: 10px 15px;
  font-size: 17px !important;
  margin-left: 18px;
`;
