import React, { FunctionComponent } from 'react';
import { StyledFooter } from './StyledFooter';
import { Container } from 'styled-bootstrap-grid';
import { Typography } from '@mycrypto/ui';
import GitHubIcon from './GitHubIcon';
import MyCryptoLogo from './MyCryptoLogo';

const Footer: FunctionComponent = () => (
  <Container>
    <StyledFooter>
      <Typography>
        Made by Maarten Zuidhoorn
        <GitHubIcon />
      </Typography>
      <Typography>
        Powered by
        <MyCryptoLogo />
      </Typography>
    </StyledFooter>
  </Container>
);

export default Footer;
