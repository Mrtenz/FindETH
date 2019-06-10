import React, { FunctionComponent, useState } from 'react';
import Typography from '../../ui/Typography';
import { StyledList } from './StyledHowToAccess';
import Icon from '../../ui/Icon';
import Modal from '../../ui/Modal';
import ClickableText from '../../ui/ClickableText';
import ExternalLink from '../../ui/ExternalLink';
import Code from '../../ui/Code';

const HowToAccess: FunctionComponent = () => {
  const [isVisible, setVisible] = useState<boolean>(false);

  const handleClick = () => {
    setVisible(true);
  };

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Modal isVisible={isVisible} onClose={handleClose}>
        <Typography>
          To access an address, navigate to{' '}
          <ExternalLink to="https://mycrypto.com">MyCrypto</ExternalLink>, and...
        </Typography>
        <StyledList inline={true} ordered={true}>
          {[
            'Choose the right derivation path from the list, or...',
            "Manually specify the derivation path you're looking for."
          ]}
        </StyledList>
        <Typography>
          Note that you should not include the last part of the derivation path you're looking for.
          For example, if you're looking for <Code>m/44'/60'/0'/0/5</Code>, you have to use{' '}
          <Code>m/44'/60'/0'/0</Code> and look for the 5th address in the list.
        </Typography>
      </Modal>
      <Typography>
        <ClickableText onClick={handleClick}>
          <Icon icon="shape" />
          Need help accessing an address?
        </ClickableText>
      </Typography>
    </>
  );
};

export default HowToAccess;
