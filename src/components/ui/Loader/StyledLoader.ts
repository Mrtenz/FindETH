import styled from 'styled-components';
import { transparentize } from 'polished';

const StyledLoader = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => transparentize(0.5, theme.background)};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

export default StyledLoader;
