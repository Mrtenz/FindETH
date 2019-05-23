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
        Powered by <MyCryptoLogo /> | Made by Maarten Zuidhoorn <GitHubIcon />
      </Typography>
    </StyledFooter>
  </Container>
);

export default Footer;
