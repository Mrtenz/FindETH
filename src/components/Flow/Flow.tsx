import React, { ComponentType, FunctionComponent, useState } from 'react';
import { Stepper } from '@mycrypto/ui';
import { FlowHeader, StepperContainer } from './StyledFlow';
import Page from '../ui/Page';
import Section from '../ui/Section';
import Heading from '../ui/Heading';

export interface FlowProps {
  onNext(): void;
}

interface FlowComponent {
  title: string;
  Component: ComponentType<FlowProps>;
}

interface Props {
  components: FlowComponent[];

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

  const currentFlow = components[current];

  if (currentFlow) {
    const { Component, title } = currentFlow;

    return (
      <Page>
        <Section paddingTop={false}>
          <FlowHeader>
            <Heading as="h2">{title}</Heading>
            <StepperContainer>
              <Stepper current={current} total={components.length} />
            </StepperContainer>
          </FlowHeader>
          <Component onNext={handleNext} />
        </Section>
      </Page>
    );
  }

  return null;
};

export default Flow;
