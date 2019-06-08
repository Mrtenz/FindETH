import styled from 'styled-components';

export const StepperContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledStepper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 0.9rem;
  height: 0.9rem;
  margin-right: 0.6rem;
  background: ${({ theme }) => theme.link};
  border-radius: 50%;
`;

export const Step = styled.div`
  width: 0.6rem;
  height: 0.6rem;
  margin-right: 0.6rem;
  background: ${({ theme }) => theme.link};
  border-radius: 50%;
`;

export const ActiveStep = styled.div`
  width: 0.49rem;
  height: 0.49rem;
  background: ${({ theme }) => theme.background};
  border-radius: 50%;
`;
