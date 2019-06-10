import styled from 'styled-components';

export const StepperContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

interface FlowHeaderProps {
  smallHeading: boolean;
}

export const FlowHeader = styled.div<FlowHeaderProps>`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ smallHeading }) => (smallHeading ? '1.494rem' : '2.988rem')};
`;
