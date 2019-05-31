import React, { FunctionComponent, useEffect } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Location } from 'history';

declare const _paq: string[][];

type Props = RouteComponentProps;

const Analytics: FunctionComponent<Props> = ({ history, children }) => {
  const listener = (location: Location) => {
    _paq.push(['setCustomUrl', location.pathname]);
    _paq.push(['trackPageView']);
  };

  useEffect(() => {
    return history.listen(listener);
  });

  return <>{children}</>;
};

export default withRouter(Analytics);
