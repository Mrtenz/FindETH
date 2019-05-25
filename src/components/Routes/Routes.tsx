import React, { FunctionComponent } from 'react';
import { Router } from '@reach/router';
import Search from '../Search';
import Home from '../Home';
import EtherFlow from '../EtherFlow';
import AddressFlow from '../AddressFlow';
import SelectType from '../SelectType';

const Routes: FunctionComponent = () => {
  return (
    <Router>
      <Home path="/" default={true} />
      <Search path="search/:type" />

      <SelectType path="start" />
      <AddressFlow path="flow/address" />
      <EtherFlow path="flow/ether" />
    </Router>
  );
};

export default Routes;
