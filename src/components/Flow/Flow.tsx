import React, { ComponentType, FunctionComponent, useState } from 'react';
import { FlowHeader, StepperContainer } from './StyledFlow';
import Page from '../ui/Page';
import Section from '../ui/Section';
import Heading from '../ui/Heading';
import Stepper from '../ui/Stepper';

export interface FlowProps {
  onNext(): void;
}

interface FlowComponent {
  title: string;
  Component: ComponentType<FlowProps>;
}

interface Props {
  components: FlowComponent[];
  page?: boolean;
  smallHeading?: boolean;

  onDone(): void;
}

const Flow: FunctionComponent<Props> = ({
  components,
  onDone,
  page = true,
  smallHeading = false
}) => {
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

    const flow = (
      <>
        <FlowHeader smallHeading={smallHeading}>
          <Heading as={smallHeading ? 'h3' : 'h2'} noMargin={true}>
            {title}
          </Heading>
          <StepperContainer>
            <Stepper current={current} total={components.length} />
          </StepperContainer>
        </FlowHeader>
        <Component onNext={handleNext} />
      </>
    );

    if (page) {
      return (
        <Page>
          <Section paddingTop={false}>{flow}</Section>
        </Page>
      );
    }

    return flow;
  }

  return null;
};

export default Flow;
