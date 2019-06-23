import React, { FunctionComponent, useEffect, useState } from 'react';
import BrowserUnsupported from './BrowserUnsupported';

const BrowserCheck: FunctionComponent = ({ children }) => {
  const [isSupported, setSupported] = useState<boolean>(false);

  useEffect(() => {
    if (typeof BigInt !== 'undefined') {
      setSupported(true);
    }
  });

  if (isSupported) {
    return <>{children}</>;
  }

  return <BrowserUnsupported />;
};

export default BrowserCheck;
