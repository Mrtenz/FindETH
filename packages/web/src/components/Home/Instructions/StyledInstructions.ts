import styled from 'styled-components';
import { media } from '../../../styles';

export const InstructionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  ${media.max.medium`
    flex-direction: column;
  `}
`;
