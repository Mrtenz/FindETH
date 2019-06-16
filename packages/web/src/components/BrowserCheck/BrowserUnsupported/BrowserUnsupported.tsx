import React, { FunctionComponent } from 'react';
import { Heading } from '@mycrypto/ui';
import Typography from '../../ui/Typography';
import ExternalLink from '../../ui/ExternalLink';
import Page from '../../ui/Page';
import Section from '../../ui/Section';

const BrowserUnsupported: FunctionComponent = () => (
  <Page>
    <Section paddingTop={false}>
      <Heading as="h2">Unsupported browser</Heading>
      <Typography>
        This function requires{' '}
        <ExternalLink to="https://www.google.com/chrome/">Google Chrome</ExternalLink>,{' '}
        <ExternalLink to="https://www.opera.com/">Opera</ExternalLink> or{' '}
        <ExternalLink to="https://brave.com/">Brave</ExternalLink>.
      </Typography>
    </Section>
  </Page>
);

export default BrowserUnsupported;
