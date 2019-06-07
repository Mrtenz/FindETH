import styled from 'styled-components';
import Panel from '../../../ui/Panel';
import { media } from '../../../../styles';

export const StepContainer = styled(Panel)`
  flex-grow: 1;
  flex-basis: 0;
  margin: 1.2rem;
  height: auto;

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;
  }

  ${media.max.medium`
    box-sizing: border-box;
    width: 100%;
    margin: 0.6rem 0;
  `}
`;
