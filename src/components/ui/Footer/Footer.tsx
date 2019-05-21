import React, { FunctionComponent } from 'react';
import { StyledFooter } from './StyledFooter';
import { Container } from 'styled-bootstrap-grid';
import { Typography } from '@mycrypto/ui';
import GitHubIcon from './GitHubIcon';

const Footer: FunctionComponent = () => (
  <Container>
    <StyledFooter>
      <Typography>
        Made by Maarten Zuidhoorn
        <GitHubIcon/>
      </Typography>
    </StyledFooter>
  </Container>
);

export default Footer;
