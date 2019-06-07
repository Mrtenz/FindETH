import React, { FunctionComponent } from 'react';
import { FooterContainer, FooterItem, FooterTypography } from './StyledFooter';
import GitHubIcon from './GitHubIcon';
import MyCryptoLogo from './MyCryptoLogo';
import Section from '../Section';
import ThemeToggle from '../../ThemeToggle';

const Footer: FunctionComponent = () => (
  <Section as="div" paddingTop="1.175rem" paddingBottom="1.175rem" dark={true}>
    <FooterContainer>
      <FooterItem>
        <FooterTypography>
          Powered by <MyCryptoLogo />
        </FooterTypography>
      </FooterItem>
      <FooterItem>
        <ThemeToggle />
      </FooterItem>
      <FooterItem>
        <FooterTypography>
          Made by Maarten Zuidhoorn <GitHubIcon />
        </FooterTypography>
      </FooterItem>
    </FooterContainer>
  </Section>
);

export default Footer;
