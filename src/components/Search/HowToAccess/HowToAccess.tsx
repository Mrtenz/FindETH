import React, { FunctionComponent, useState } from 'react';
import { Typography } from '@mycrypto/ui';
import { StyledList } from './StyledHowToAccess';
import Icon from '../../ui/Icon';
import Modal from '../../ui/Modal';
import ClickableText from '../../ui/ClickableText';

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
          To access an address, navigate to <a href="https://mycrypto.com">MyCrypto</a>, and...
        </Typography>
        <StyledList inline={true} ordered={true}>
          {[
            'Choose the right derivation path from the list, or...',
            "Manually specify the derivation path you're looking for."
          ]}
        </StyledList>
      </Modal>
      <ClickableText onClick={handleClick}>
        <Icon icon="shape" />
        Need help accessing an address?
      </ClickableText>
    </>
  );
};

export default HowToAccess;
