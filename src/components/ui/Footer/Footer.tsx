import React, { FunctionComponent } from 'react';
import { FooterContainer } from './StyledFooter';
import { Typography } from '@mycrypto/ui';
import GitHubIcon from './GitHubIcon';
import MyCryptoLogo from './MyCryptoLogo';
import Section from '../Section';

const Footer: FunctionComponent = () => (
  <Section as="div" paddingTop="1.175rem" paddingBottom="1.175rem" dark={true}>
    <FooterContainer as="footer">
      <Typography>
        Powered by <MyCryptoLogo /> | Made by Maarten Zuidhoorn <GitHubIcon />
      </Typography>
    </FooterContainer>
  </Section>
);

export default Footer;
