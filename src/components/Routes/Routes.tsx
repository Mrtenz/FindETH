import React, { FunctionComponent } from 'react';
import { Router } from '@reach/router';
import Steps from '../Steps';
import Search from '../Search';
import Home from '../Home';

const Routes: FunctionComponent = () => {
  return (
    <Router>
      <Home path="/" default={true} />
      <Steps path="steps/:step" />
      <Search path="search/:type" />
    </Router>
  );
};

export default Routes;
