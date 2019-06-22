import React, { ChangeEvent, FunctionComponent, useState } from 'react';
import Input from '../../ui/Input';
import { ModalButtons } from '../../ui/Modal/StyledModal';
import Button from '../../ui/Button';
import Typography from '../../ui/Typography';
import { MnemonicFlowProps } from '../MnemonicFlow';

type Props = MnemonicFlowProps;

const EnterPassword: FunctionComponent<Props> = ({ onNext, onClose }) => {
  const [password, setPassword] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSkip = () => {
    onNext();
  };

  const handleNext = () => {
    onNext({ password });
  };

  return (
    <>
      <Typography>
        If you are not sure if you used a password before, you should enter one anyway. FindETH will
        search with and without the password.
      </Typography>
      <Input
        type="password"
        placeholder="Optional password"
        value={password}
        onChange={handleChange}
      />
      <ModalButtons>
        <Button secondary={true} onClick={onClose}>
          Close
        </Button>
        <Button secondary={true} onClick={handleSkip}>
          Skip
        </Button>
        <Button onClick={handleNext}>Next</Button>
      </ModalButtons>
    </>
  );
};

export default EnterPassword;
