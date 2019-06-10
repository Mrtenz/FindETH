import React, { ChangeEvent, FunctionComponent, useEffect, useState } from 'react';
import Input from '../../ui/Input';
import { ModalButtons } from '../../ui/Modal/StyledModal';
import Button from '../../ui/Button';
import { isValidMnemonic } from '@ethersproject/hdnode';
import { swapMnemonicPhrase } from '../../../utils/mnemonic';
import Message from '../../ui/Message';
import Typography from '../../ui/Typography';
import ClickableText from '../../ui/ClickableText';
import { MnemonicFlowProps } from '../MnemonicFlow';

type Props = MnemonicFlowProps;

const EnterMnemonicPhrase: FunctionComponent<Props> = ({ onNext, onClose }) => {
  const [mnemonicPhrase, setMnemonicPhrase] = useState<string>('');
  const [messageMnemonicPhrase, setMessageMnemonicPhrase] = useState<string>('');
  const [isValid, setValid] = useState<boolean>(false);
  const [isPossibleSwapped, setPossibleSwapped] = useState<boolean>(false);
  const [isSwapped, setSwapped] = useState<boolean>(false);

  useEffect(() => {
    setSwapped(false);
    setPossibleSwapped(false);

    const swappedPhrase = swapMnemonicPhrase(mnemonicPhrase);
    const isSwappedValid = isValidMnemonic(swappedPhrase);

    if (!isValidMnemonic(mnemonicPhrase)) {
      setValid(false);

      if (isSwappedValid) {
        setSwapped(true);
        setMessageMnemonicPhrase(mnemonicPhrase);
      }
    } else {
      setValid(true);

      if (isSwappedValid) {
        setPossibleSwapped(true);
        setMessageMnemonicPhrase(mnemonicPhrase);
      }
    }
  }, [mnemonicPhrase]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMnemonicPhrase(event.target.value);
  };

  const handleSwap = () => {
    setMnemonicPhrase(swapMnemonicPhrase(mnemonicPhrase));
  };

  const handleNext = () => {
    onNext({
      mnemonicPhrase
    });
  };

  return (
    <>
      <Message type="warning" isVisible={isSwapped}>
        <Typography>
          It appears you have entered the mnemonic phrase in the wrong order. Did you mean{' '}
          <ClickableText onClick={handleSwap}>
            {swapMnemonicPhrase(messageMnemonicPhrase)}
          </ClickableText>
          ?
        </Typography>
      </Message>

      <Message type="info" isVisible={isPossibleSwapped}>
        <Typography>
          The provided mnemonic phrase is valid, but you <em>may</em> have entered it in the wrong
          order. Did you mean{' '}
          <ClickableText onClick={handleSwap}>
            {swapMnemonicPhrase(messageMnemonicPhrase)}
          </ClickableText>
          ?
        </Typography>
      </Message>

      <Input
        placeholder="tonight false web cake etc."
        value={mnemonicPhrase}
        onChange={handleChange}
      />
      <ModalButtons>
        <Button secondary={true} onClick={onClose}>
          Close
        </Button>
        <Button disabled={!isValid} onClick={handleNext}>
          Next
        </Button>
      </ModalButtons>
    </>
  );
};

export default EnterMnemonicPhrase;
