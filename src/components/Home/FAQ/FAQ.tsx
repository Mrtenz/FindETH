import React, { FunctionComponent } from 'react';
import Grid from '../../ui/Grid';
import Question from './Question';
import ExternalLink from '../../ui/ExternalLink';
import { ALL_DERIVATION_PATHS } from '../../../config';

const FAQ: FunctionComponent = () => (
  <Grid columnWidth="25rem" gap="1.2rem">
    <Question question="Is this tool safe?">
      The code is open-source and available on{' '}
      <ExternalLink to="https://github.com/Mrtenz/FindETH">GitHub</ExternalLink>. If you don't trust
      the hosted version, you can run it locally too, with the instructions provided on GitHub. For
      safety reasons, you have to run it offline, if you want to search using a mnemonic phrase.
    </Question>

    <Question question="How does it work?">
      Hierarchical deterministic wallets like a Ledger device, Trezor device and mnemonic phrase are
      able to generate many different addresses from a single seed by using{' '}
      <ExternalLink to="https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki">
        derivation paths
      </ExternalLink>
      . FindETH will search through the most common derivation paths (currently{' '}
      {ALL_DERIVATION_PATHS.length}), offered by some of the popular wallets.
    </Question>

    <Question question="Can I run it offline?">
      Partially. You can search for addresses offline, but in order to search for Ether or tokens,
      an internet connection is required in order to fetch the balances from the Ethereum network.
      Instructions on running it locally can be found on{' '}
      <ExternalLink to="https://github.com/Mrtenz/FindETH">GitHub</ExternalLink>.
    </Question>

    <Question question="Can I use my private key or keystore file?">
      No. Private keys and key store files aren't hierarchical deterministic wallets; they generate
      a single address. You cannot use those to search for your Ether, address or tokens with
      FindETH.
    </Question>
  </Grid>
);

export default FAQ;
