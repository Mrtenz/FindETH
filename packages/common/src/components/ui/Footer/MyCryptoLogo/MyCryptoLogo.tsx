import React, { FunctionComponent } from 'react';
import myCryptoLogo from '../../../../assets/images/logos/mycrypto.svg';
import { StyledMyCryptoLogo } from './StyledMyCryptoLogo';
import ExternalLink from '../../ExternalLink';

const MyCryptoLogo: FunctionComponent = () => (
  <ExternalLink to="https://mycrypto.com">
    <StyledMyCryptoLogo src={myCryptoLogo} />
  </ExternalLink>
);

export default MyCryptoLogo;
