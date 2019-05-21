import React, { FunctionComponent } from 'react';
import Step from './Step';
import { StepsTypography } from './StyledSteps';

export const Steps: FunctionComponent = () => (
  <>
    <Step icon={'1'}>
      <StepsTypography>
        Select your address
      </StepsTypography>
    </Step>
    <Step icon={'2'}>
      <StepsTypography>
        Choose your wallet type and settings
      </StepsTypography>
    </Step>
    <Step icon={'3'} showLine={false}>
      <StepsTypography>
        Search!
      </StepsTypography>
    </Step>
  </>
);

export default Steps;
