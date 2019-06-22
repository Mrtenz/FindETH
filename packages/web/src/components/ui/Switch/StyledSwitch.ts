import styled from 'styled-components';

interface Props {
  isOn: boolean;
}

export const StyledSwitchContainer = styled.div<Props>`
  cursor: pointer;
  display: inline-block;
  position: relative;
  width: 45px;
  height: 20px;
  padding: 3px;
  border-radius: 15px;
  background: ${({ isOn, theme }) => (isOn ? '#b2d7e0' : theme.switchBackgroundGreyable)};
  transition: background 0.2s;
`;

export const StyledSwitch = styled.div<Props>`
  height: 20px;
  width: 20px;
  border-radius: 100%;
  background: ${({ isOn, theme }) => (isOn ? theme.primary : 'grey')};
  transform: translateX(${({ isOn }) => (isOn ? '25px' : '0px')});
  transition: background 0.2s, transform 0.2s;
`;
