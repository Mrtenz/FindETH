import React, { FunctionComponent } from 'react';
import { Container } from 'styled-bootstrap-grid';
import { Heading, Typography } from '@mycrypto/ui';
import ExternalLink from '../../ui/ExternalLink';

const BrowserUnsupported: FunctionComponent = () => (
  <Container>
    <Heading as="h2">Unsupported browser</Heading>
    <Typography>
      This function requires{' '}
      <ExternalLink to="https://www.google.com/chrome/">Google Chrome</ExternalLink>,{' '}
      <ExternalLink to="https://www.opera.com/">Opera</ExternalLink> or{' '}
      <ExternalLink to="https://brave.com/">Brave</ExternalLink>.
    </Typography>
  </Container>
);

export default BrowserUnsupported;
