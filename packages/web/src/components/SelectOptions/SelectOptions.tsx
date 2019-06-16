import React, { FunctionComponent } from 'react';
import { Button } from '@mycrypto/ui';
import Paths from './Paths';
import Depth from './Depth';
import { FlowProps } from '../Flow';

type Props = FlowProps;

const SelectOptions: FunctionComponent<Props> = ({ onNext }) => {
  return (
    <>
      <Depth />
      <Paths />
      <Button onClick={onNext}>Search</Button>
    </>
  );
};

export default SelectOptions;
