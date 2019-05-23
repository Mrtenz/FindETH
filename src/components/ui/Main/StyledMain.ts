import styled from 'styled-components';
import { SMALL_DISPLAYS } from '../../../constants';

export const StyledMain = styled.div`
  flex: 1;
  padding: 75px;

  @media ${SMALL_DISPLAYS} {
    padding: 25px;
  }
`;
