import React, { FunctionComponent } from 'react';
import { FooterContainer, FooterItem, FooterItemContainer, FooterTypography } from './StyledFooter';
import GitHubIcon from './GitHubIcon';
import MyCryptoLogo from './MyCryptoLogo';
import Section from '../Section';
import ThemeToggle from '../../ThemeToggle';
import Donate from './Donate/Donate';

const Footer: FunctionComponent = () => (
  <Section as="div" paddingTop="1.175rem" paddingBottom="1.175rem" dark={true} border={true}>
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
        <FooterItemContainer>
          <FooterTypography>
            Made by Maarten Zuidhoorn <GitHubIcon />
          </FooterTypography>
          <Donate />
        </FooterItemContainer>
      </FooterItem>
    </FooterContainer>
  </Section>
);

export default Footer;
