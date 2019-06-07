import React, { FunctionComponent } from 'react';
import { DonateContainer } from './StyledDonate';
import ExternalLink from '../../ExternalLink';

const Donate: FunctionComponent = () => (
  <DonateContainer>
    Donate (ETH):{' '}
    <ExternalLink to="https://etherscan.io/address/0xDFDD854DaAD30E6E077AEf1c653169968c102E34">
      0xDFDD854DaAD30E6E077AEf1c653169968c102E34
    </ExternalLink>
  </DonateContainer>
);

export default Donate;
