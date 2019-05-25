import React, { FunctionComponent } from 'react';
import { Button, Heading } from '@mycrypto/ui';
import Paths from './Paths';
import Depth from './Depth';
import { FlowProps } from '../Flow/Flow';

type Props = FlowProps;

const SelectOptions: FunctionComponent<Props> = ({ onNext }) => {
  return (
    <>
      <Heading as="h2">Choose your options</Heading>
      <Depth />
      <Paths />
      <Button onClick={onNext}>Search</Button>
    </>
  );
};

export default SelectOptions;
