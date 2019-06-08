import React, { ComponentType, FunctionComponent, useState } from 'react';
import { FlowHeader, StepperContainer } from './StyledFlow';
import Page from '../ui/Page';
import Section from '../ui/Section';
import Heading from '../ui/Heading';
import Stepper from '../ui/Stepper';

export interface FlowProps<T extends {} = {}> {
  onNext(result?: Partial<T>): void;
}

interface FlowComponent<T, I> {
  title: string;
  Component: ComponentType<FlowProps<T> & I>;
}

interface Props<T, I> {
  components: FlowComponent<T, I>[];
  page?: boolean;
  smallHeading?: boolean;
  injectedProps: I;

  onDone(result: Partial<T>): void;
}

const useFlow = <T extends {} = {}, I extends unknown = any>(): [
  () => void,
  ComponentType<Props<T, I>>
] => {
  const [current, setCurrent] = useState<number>(0);
  const [result, setResult] = useState<Partial<T>>({});

  const reset = () => {
    setCurrent(0);
    setResult({});
  };

  const Flow: FunctionComponent<Props<T, I>> = ({
    components,
    onDone,
    page = true,
    smallHeading = false,
    injectedProps
  }) => {
    const handleNext = (currentResult?: Partial<T>): void => {
      if (current + 1 === components.length) {
        return onDone({ ...result, ...currentResult });
      }

      setCurrent(current + 1);
      setResult({ ...result, ...currentResult });
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
          <Component onNext={handleNext} {...injectedProps} />
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

  return [reset, Flow];
};

export default useFlow;
