import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { RouteComponentProps, Router } from '@reach/router';
import { Stepper } from '@mycrypto/ui';
import SelectType from './SelectType';
import SelectAddress from './SelectAddress';
import SelectWallet from './SelectWallet';
import SelectOptions from './SelectOptions';
import { Container } from 'styled-bootstrap-grid';

const StepperContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

type Props = RouteComponentProps<{ step: string }>;

const Steps: FunctionComponent<Props> = ({ step = '0' }) => (
  <Container>
    <StepperContainer>
      <Stepper current={Number(step)} total={4} />
    </StepperContainer>

    <Router basepath="steps">
      <SelectType path="0" />
      <SelectAddress path="1" />
      <SelectWallet path="2" />
      <SelectOptions path="3" />
    </Router>
  </Container>
);

export default Steps;
