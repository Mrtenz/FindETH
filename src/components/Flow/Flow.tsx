import React, { ComponentType, FunctionComponent, useState } from 'react';
import { Col, Container, Row } from 'styled-bootstrap-grid';
import { Heading, Stepper } from '@mycrypto/ui';
import { StepperContainer } from './StyledFlow';

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
      <Container>
        <Row alignItems="center" justifyContent="between">
          <Col auto={true}>
            <Heading as="h2">{title}</Heading>
          </Col>
          <Col auto={true}>
            <StepperContainer>
              <Stepper current={current} total={components.length} />
            </StepperContainer>
          </Col>
        </Row>
        <Component onNext={handleNext} />
      </Container>
    );
  }

  return null;
};

export default Flow;
