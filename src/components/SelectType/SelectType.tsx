import React, { FunctionComponent } from 'react';
import { Heading, Typography } from '@mycrypto/ui';
import { Container } from 'styled-bootstrap-grid';
import Align from '../ui/Align';
import ClickablePanel from '../ui/ClickablePanel';
import walletIcon from '../../assets/images/wallet.svg';
import ethereumIcon from '../../assets/images/logos/ethereum-minimal.svg';
import daiIcon from '../../assets/images/logos/dai.svg';

const SelectType: FunctionComponent = () => (
  <Container>
    <Heading as="h2">What are you looking for?</Heading>
    <Typography>
      Are you looking for a specific address, or for Ether or tokens on the addresses?
    </Typography>

    <Align align="center" flexWrap={true}>
      <ClickablePanel title="Address" icon={walletIcon} to="/flow/address" />
      <ClickablePanel title="Ether" icon={ethereumIcon} to="/flow/ether" />
      <ClickablePanel title="Tokens" icon={daiIcon} to="/flow/token" />
    </Align>
  </Container>
);

export default SelectType;
