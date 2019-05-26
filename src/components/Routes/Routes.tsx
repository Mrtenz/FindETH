import React, { FunctionComponent } from 'react';
import { Router } from '@reach/router';
import Search from '../Search';
import Home from '../Home';
import SelectType from '../SelectType';
import EtherFlow from '../EtherFlow';
import AddressFlow from '../AddressFlow';
import TokenFlow from '../TokenFlow';

const Routes: FunctionComponent = () => {
  return (
    <Router>
      <Home path="/" default={true} />
      <Search path="search/:type" />

      <SelectType path="start" />
      <AddressFlow path="flow/address" />
      <EtherFlow path="flow/ether" />
      <TokenFlow path="flow/token" />
    </Router>
  );
};

export default Routes;
