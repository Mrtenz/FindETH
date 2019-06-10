import styled from 'styled-components';
import Button from '../Button';

interface Props {
  isVisible: boolean;
}

export const StyledModalOverlay = styled.div<Props>`
  display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ isVisible }) => (isVisible ? 'rgba(0, 0, 0, 0.2)' : 'rgba(0, 0, 0, 0)')};
  transition: background 0.2s;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const StyledModal = styled.div<Props>`
  background: ${({ theme }) => theme.background};
  transform: ${({ isVisible }) => (isVisible ? 'scale(1)' : 'scale(0.8)')};
  transition: transform 0.2s;
  padding: 36px;
  width: 600px;
  max-width: 100%;
  margin: 18px;
  border-radius: 3px;
  max-height: calc(100% - 36px);
  overflow-y: auto;
  box-sizing: border-box;
`;

export const ModalButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 18px;
  flex-wrap: wrap;

  & ${Button} {
    margin-left: 18px;
  }
`;
