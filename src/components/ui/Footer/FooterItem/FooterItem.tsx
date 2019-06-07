import React, { FunctionComponent } from 'react';
import { FooterItemContainer } from './StyledFooterItem';

const FooterItem: FunctionComponent = ({ children }) => (
  <FooterItemContainer>{children}</FooterItemContainer>
);

export default FooterItem;
