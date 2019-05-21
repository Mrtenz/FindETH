import React, { FunctionComponent } from 'react';
import { StyledStartButton } from './StyledStartButton';
import { history } from '../../../App';

const StartButton: FunctionComponent = () => {
  const handleClick = () => {
    history.navigate('/steps/0');
  };

  return (
  <StyledStartButton onClick={handleClick}>
    Start searching
  </StyledStartButton>
  );
};

export default StartButton;
