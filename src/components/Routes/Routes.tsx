import React, { FunctionComponent } from 'react';
import { Route, Switch } from 'react-router';
import Home from '../Home';
import SelectType from '../SelectType';
import EtherFlow from '../EtherFlow';
import AddressFlow from '../AddressFlow';
import TokenFlow from '../TokenFlow';
import Search from '../Search';

const Routes: FunctionComponent = () => {
  return (
    <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route exact={true} path="/start" component={SelectType} />
      <Route exact={true} path="/flow/address" component={AddressFlow} />
      <Route exact={true} path="/flow/ether" component={EtherFlow} />
      <Route exact={true} path="/flow/token" component={TokenFlow} />
      <Route exact={true} path="/search/:type" component={Search} />
    </Switch>
  );
};

export default Routes;
