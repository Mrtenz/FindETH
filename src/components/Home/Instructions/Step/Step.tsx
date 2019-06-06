import React, { FunctionComponent } from 'react';
import { Typography } from '@mycrypto/ui';
import Heading from '../../../ui/Heading';
import { StepContainer } from './StyledStep';

interface Props {
  step: number;
}

const Step: FunctionComponent<Props> = ({ step, children }) => (
  <StepContainer>
    <Heading as="h3">{step}.</Heading>
    <Typography>{children}</Typography>
  </StepContainer>
);

export default Step;
