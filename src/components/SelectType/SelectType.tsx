import React, { FunctionComponent } from 'react';
import { Heading, Typography } from '@mycrypto/ui';
import { Container } from 'styled-bootstrap-grid';
import { SearchButton } from './StyledSelectType';
import { Link } from 'react-router-dom';

const SelectType: FunctionComponent = () => (
  <Container>
    <Heading as="h2">What are you looking for?</Heading>
    <Typography>Are you looking for a specific address, or for Ether on the addresses?</Typography>
    <Link to="/flow/address">
      <SearchButton>An address</SearchButton>
    </Link>
    <Link to="/flow/ether">
      <SearchButton>Ether</SearchButton>
    </Link>
    <Link to="/flow/token">
      <SearchButton>A token</SearchButton>
    </Link>
  </Container>
);

export default SelectType;
