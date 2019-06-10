import React, { FunctionComponent } from 'react';
import Typography from '../ui/Typography';
import Align from '../ui/Align';
import ClickablePanel from '../ui/ClickablePanel';
import walletIcon from '!!react-svg-loader!../../assets/images/icons/wallet.svg';
import ethereumIcon from '!!react-svg-loader!../../assets/images/logos/ethereum-minimal.svg';
import daiIcon from '!!react-svg-loader!../../assets/images/logos/dai.svg';
import Section from '../ui/Section';
import Page from '../ui/Page';
import Heading from '../ui/Heading';

const SelectType: FunctionComponent = () => (
  <Page>
    <Section paddingTop={false}>
      <Heading as="h2">What are you looking for?</Heading>
      <Typography>
        Are you looking for a specific address, or for Ether or tokens on the addresses?
      </Typography>

      <Align align="center" flexWrap={true}>
        <ClickablePanel title="Address" icon={walletIcon} to="/flow/address" />
        <ClickablePanel title="Ether" icon={ethereumIcon} to="/flow/ether" />
        <ClickablePanel title="Tokens" icon={daiIcon} to="/flow/token" />
      </Align>
    </Section>
  </Page>
);

export default SelectType;
