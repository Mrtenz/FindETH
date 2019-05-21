import React, { FunctionComponent } from 'react';
import { Heading } from '@mycrypto/ui';
import { Container } from 'styled-bootstrap-grid';
import { StyledHeader } from './StyledHeader';

const Header: FunctionComponent = () => (
  <Container>
    <StyledHeader>
      <Heading as='h1'>FindETH</Heading>
    </StyledHeader>
  </Container>
);

export default Header;
