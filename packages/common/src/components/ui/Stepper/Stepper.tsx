import React, { FunctionComponent } from 'react';
import { ActiveStep, Step, StepperContainer, StyledStepper } from './StyledStepper';

interface Props {
  current: number;
  total: number;
}

/**
 * Based on
 * https://github.com/MyCryptoHQ/ui/blob/57d5b01a6d56199e21f20839994eca19729cbe40/src/atoms/Stepper/Stepper.tsx,
 * but with updated styles to work in FindETH.
 */
const Stepper: FunctionComponent<Props> = ({ current, total }) => (
  <StepperContainer>
    {Array.from({ length: total }, (_, index) =>
      index === current ? (
        <StyledStepper key={index}>
          <ActiveStep />
        </StyledStepper>
      ) : (
        <Step key={index} />
      )
    )}
  </StepperContainer>
);

export default Stepper;
