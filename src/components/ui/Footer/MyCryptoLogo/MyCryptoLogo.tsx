import React, { FunctionComponent } from 'react';
import myCryptoLogo from '../../../../assets/images/logos/mycrypto.svg';
import { StyledMyCryptoLogo } from './StyledMyCryptoLogo';

const MyCryptoLogo: FunctionComponent = () => (
  <a href="https://mycrypto.com" target="_blank">
    <StyledMyCryptoLogo src={myCryptoLogo} />
  </a>
);

export default MyCryptoLogo;
