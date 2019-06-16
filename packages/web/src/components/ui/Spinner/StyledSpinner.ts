import styled, { keyframes } from 'styled-components';
import Typography from '../Typography';

interface Props {
  width?: number;
  height?: number;
}

export const StyledSpinnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 1em;
`;

const Spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const StyledSpinner = styled.span<Props>`
  display: inline-block;
  width: ${({ width = 25 }) => `${width}px`};
  height: ${({ height = 25 }) => `${height}px`};
  border: 3px solid rgba(0, 120, 150, 0.3);
  border-radius: 100%;
  border-top-color: ${({ theme }) => theme.primary};
  animation: ${Spin} 1s ease-in-out infinite;
`;

export const StyledSpinnerTypography = styled(Typography)`
  margin: 0 0 0 9px;
  word-break: break-word;
`;
