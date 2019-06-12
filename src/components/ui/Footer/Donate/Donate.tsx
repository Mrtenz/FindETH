import React, { FunctionComponent } from 'react';
import { Address, DonateContainer, SmallAddress } from './StyledDonate';

const Donate: FunctionComponent = () => (
  <DonateContainer>
    Donate (ETH):{' '}
    <Address to="https://etherscan.io/address/0xDFDD854DaAD30E6E077AEf1c653169968c102E34">
      0xDFDD854DaAD30E6E077AEf1c653169968c102E34
    </Address>
    <SmallAddress to="https://etherscan.io/address/0xDFDD854DaAD30E6E077AEf1c653169968c102E34">
      0xDFDD...2E34
    </SmallAddress>
  </DonateContainer>
);

export default Donate;
