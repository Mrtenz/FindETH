import React, { FunctionComponent } from 'react';
import { IS_LOCAL } from '../../config';
import NotLocal from './NotLocal';

const LocalCheck: FunctionComponent = ({ children }) => {
  if (IS_LOCAL) {
    return <>{children}</>;
  }

  return <NotLocal />;
};

export default LocalCheck;
