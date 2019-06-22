import React, { FunctionComponent } from 'react';
import Page from '../ui/Page';
import Typography from '../ui/Typography';
import Section from '../ui/Section';
import Heading from '../ui/Heading';
import ButtonLink from '../ui/ButtonLink/ButtonLink';
import Instructions from './Instructions';
import FAQ from './FAQ';

const Home: FunctionComponent = () => (
  <Page>
    <Section paddingTop={false}>
      <Heading as="h2">Find your lost Ether or address</Heading>
      <Typography>
        This tool can help you if you lost your Ethereum address, Ether or tokens that you got from
        a mnemonic phrase, or a Ledger or Trezor device. In a few simple steps, you can quickly
        search for the address, Ether or tokens on your wallet.
      </Typography>
      <ButtonLink to="/start">Start searching!</ButtonLink>
    </Section>
    <Section secondary={true}>
      <Heading as="h2">How it works</Heading>
      <Instructions />
    </Section>
    <Section grow={true}>
      <Heading as="h2">Frequently Asked Questions</Heading>
      <FAQ />
    </Section>
  </Page>
);

export default Home;
