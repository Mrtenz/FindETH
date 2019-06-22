import styled, { css, FindETHTheme } from '../../../styles';
import { InterpolationValue } from 'styled-components';
import Typography from '../Typography';

type MessageType = 'info' | 'error' | 'warning';

interface Props {
  type: MessageType;
  isVisible?: boolean;
}

const getColor = (theme: FindETHTheme, type: MessageType): string => {
  switch (type) {
    case 'info':
      return theme.infoMessageBackground;
    case 'error':
      return theme.errorMessageBackground;
    case 'warning':
      return theme.warningMessageBackground;
  }
};

const getProperties = (isVisible: boolean): InterpolationValue[] => {
  if (isVisible) {
    return css`
      max-height: 500px;
      margin-bottom: 1.494rem;
      padding: 2rem;
      opacity: 1;
      pointer-events: auto;
    `;
  }

  return css`
    max-height: 0;
    margin-bottom: 0;
    padding: 0 2rem;
    opacity: 0;
    pointer-events: none;
  `;
};

const getTransition = (isVisible: boolean): InterpolationValue[] => {
  if (isVisible) {
    return css`
      transition: max-height 0.25s 0s ease-in-out, margin-bottom 0.25s 0s ease-in-out,
        padding 0.25s 0s ease-in-out, opacity 0.25s 0.25s ease-in-out;
    `;
  }

  return css`
    transition: max-height 0.25s 0.25s ease-in-out, margin-bottom 0.25s 0.25s ease-in-out,
      padding 0.25s 0.25s ease-in-out, opacity 0.25s 0s ease-in-out;
  `;
};

const Message = styled.div<Props>`
  background: ${({ theme, type }) => getColor(theme, type)};
  border-radius: ${({ theme }) => theme.borderRadius};

  ${({ isVisible }) => getTransition(typeof isVisible === 'undefined' ? true : isVisible)};
  ${({ isVisible }) => getProperties(typeof isVisible === 'undefined' ? true : isVisible)};

  & ${Typography} {
    margin: 0;
    color: white;
  }
`;

export default Message;
