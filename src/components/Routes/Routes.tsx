import React, { FunctionComponent } from 'react';
import { Router } from '@reach/router';
import Steps from '../Steps';
import Search from '../Search';

const Routes: FunctionComponent = () => {
  return (
    <Router>
      <Steps path="steps/:step" />
      <Search path="search" />
    </Router>
  );
};

export default Routes;
