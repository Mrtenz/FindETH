import styled from 'styled-components';
import { media } from '../../../../styles';

export const PathContainer = styled.div`
  max-width: 22.95rem;
  flex-grow: 1;
  flex-basis: 0;

  margin: 0.6rem;

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;
  }

  ${media.max.medium`
    max-width: 100%;
    margin: 0.6rem 0;
  `}
`;

export const StyledPath = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const StyledPathInfo = styled.div``;

export const StyledSwitch = styled.div`
  align-self: center;
`;
