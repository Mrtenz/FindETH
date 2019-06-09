import styled, { scale } from '../../../styles';
import { padding } from 'polished';
import Typography from '../Typography';

export const InputContainer = styled.div`
  background: ${({ theme }) => theme.controlBackground};
  border: 0.125em solid ${({ theme }) => theme.controlBorder};
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: border ${({ theme }) => theme.transitionDuration},
    box-shadow ${({ theme }) => theme.transitionDuration};
  ${padding(scale(-1), scale(0))};
  display: flex;

  :focus-within {
    outline: none;
    box-shadow: ${({ theme }) => theme.outline};
  }
`;

export const StyledInput = styled(Typography)`
  flex: 1;
  background: none;
  border: none;
  font-size: ${scale(0)};
  outline: none;
  margin: 0;

  ::placeholder {
    color: ${props => props.theme.text};
    opacity: 0.55;
  }
`;

StyledInput.defaultProps = { as: 'input' };
