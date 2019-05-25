import React, { FunctionComponent } from 'react';
import { Heading, Typography } from '@mycrypto/ui';
import SearchTypeItem from './SearchTypeItem';
import { SearchType } from '../../config';
import { RouteComponentProps } from '@reach/router';
import { Container } from 'styled-bootstrap-grid';

type Props = RouteComponentProps;

const SelectType: FunctionComponent<Props> = () => (
  <Container>
    <Heading as="h2">What are you looking for?</Heading>
    <Typography>Are you looking for a specific address, or for Ether on the addresses?</Typography>
    <SearchTypeItem type={SearchType.Address}>An address</SearchTypeItem>
    <SearchTypeItem type={SearchType.Ether}>Ether</SearchTypeItem>
  </Container>
);

export default SelectType;
