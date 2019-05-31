import React, { FunctionComponent } from 'react';
import { StyledSwitch, StyledSwitchContainer } from './StyledSwitch';

interface Props {
  checked: boolean;
  onToggle(): void;
}

const Switch: FunctionComponent<Props> = ({ checked, onToggle }) => {
  return (
    <StyledSwitchContainer isOn={checked} onClick={onToggle}>
      <StyledSwitch isOn={checked} />
    </StyledSwitchContainer>
  );
};

export default Switch;
