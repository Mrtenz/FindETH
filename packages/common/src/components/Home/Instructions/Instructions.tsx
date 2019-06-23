import React, { FunctionComponent } from 'react';
import { InstructionsContainer } from './StyledInstructions';
import Step from './Step';

const Instructions: FunctionComponent = () => (
  <InstructionsContainer>
    <Step step={1}>Choose what you're searching for</Step>
    <Step step={2}>Unlock your wallet</Step>
    <Step step={3}>Select your options</Step>
    <Step step={4}>Search!</Step>
  </InstructionsContainer>
);

export default Instructions;
