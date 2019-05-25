import styled from 'styled-components';
import { SMALL_DISPLAYS } from '../../config';

export const StyledMain = styled.div`
  flex: 1;
  padding: 75px;

  @media ${SMALL_DISPLAYS} {
    padding: 25px;
  }
`;
