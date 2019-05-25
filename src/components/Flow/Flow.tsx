import React, { ComponentType, FunctionComponent, useState } from 'react';
import { Container } from 'styled-bootstrap-grid';
import { Stepper } from '@mycrypto/ui';
import { StepperContainer } from './StyledFlow';

export interface FlowProps {
  onNext(): void;
}

interface Props {
  components: ComponentType<FlowProps>[];

  onDone(): void;
}

const Flow: FunctionComponent<Props> = ({ components, onDone }) => {
  const [current, setCurrent] = useState<number>(0);

  const handleNext = (): void => {
    if (current + 1 === components.length) {
      return onDone();
    }
    setCurrent(current + 1);
  };

  const CurrentComponent = components[current];

  if (CurrentComponent) {
    return (
      <Container>
        <StepperContainer>
          <Stepper current={current} total={components.length} />
        </StepperContainer>
        <CurrentComponent onNext={handleNext} />
      </Container>
    );
  }

  return null;
};

export default Flow;
