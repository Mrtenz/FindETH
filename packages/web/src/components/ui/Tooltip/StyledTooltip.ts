import styled from 'styled-components';
import Typography from '../Typography';

export const StyledTooltip = styled.div`
  position: absolute;
  transform: translate(-50%, calc(-100% - 15px));
  left: 50%;
  padding: 8px 16px;
  text-align: center;
  text-transform: none;
  font-size: 1.4rem;
  border-radius: 3px;
  background: ${({ theme }) => theme.tooltipBackground};
  opacity: 0;
  z-index: 1;
  transition: opacity 0.2s, transform 0.2s;
  pointer-events: none;
  min-width: 300px;
  max-width: 100%;

  &:before {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    content: '';
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid ${({ theme }) => theme.tooltipBackground};
  }
`;

export const TooltipContainer = styled.div`
  display: inline-block;
  position: relative;
  width: auto;

  &:hover ${StyledTooltip} {
    transform: translate(-50%, calc(-100% - 10px));
    opacity: 1;
  }
`;

export const TooltipTypography = styled(Typography)`
  color: white;
`;
