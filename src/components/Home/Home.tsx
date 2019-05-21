import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from '@reach/router';
import { Container } from 'styled-bootstrap-grid';
import { Heading, Typography } from '@mycrypto/ui';
import Steps from './Steps';
import StartButton from './StartButton';

type Props = RouteComponentProps;

const Home: FunctionComponent<Props> = () => (
  <Container>
    <section>
      <Heading as="h2">Find your lost Ethereum address</Heading>
      <Typography>
        This tool can help you if you lost your Ethereum address that you got from a mnemonic
        phrase, or a Ledger or Trezor device. In a few simple steps, you can quickly search for the
        address on your wallet.
      </Typography>
    </section>
    <section>
      <Heading as="h3">How does it work?</Heading>
      <Steps />
    </section>
    <StartButton />
  </Container>
);

export default Home;
