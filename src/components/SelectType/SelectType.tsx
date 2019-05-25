import React, { FunctionComponent } from 'react';
import { Heading, Typography } from '@mycrypto/ui';
import { Link, RouteComponentProps } from '@reach/router';
import { Container } from 'styled-bootstrap-grid';
import { SearchButton } from './StyledSelectType';

type Props = RouteComponentProps;

const SelectType: FunctionComponent<Props> = () => (
  <Container>
    <Heading as="h2">What are you looking for?</Heading>
    <Typography>Are you looking for a specific address, or for Ether on the addresses?</Typography>
    <Link to="/flow/address">
      <SearchButton>An address</SearchButton>
    </Link>
    <Link to="/flow/ether">
      <SearchButton>Ether</SearchButton>
    </Link>
  </Container>
);

export default SelectType;
