import React, { FunctionComponent } from 'react';
import { Container } from 'styled-bootstrap-grid';
import { Heading, Typography } from '@mycrypto/ui';
import Steps from './Steps';
import { StartButton } from './StyledHome';
import { Link } from 'react-router-dom';

const Home: FunctionComponent = () => (
  <Container>
    <section>
      <Heading as="h2">Find your lost Ether or address</Heading>
      <Typography>
        This tool can help you if you lost your Ether or Ethereum address that you got from a
        mnemonic phrase, or a Ledger or Trezor device. In a few simple steps, you can quickly search
        for the Ether or the address on your wallet.
      </Typography>
    </section>
    <section>
      <Heading as="h3">How does it work?</Heading>
      <Steps />
    </section>
    <Link to="/start">
      <StartButton>Start searching</StartButton>
    </Link>
  </Container>
);

export default Home;
