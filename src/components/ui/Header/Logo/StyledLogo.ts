import { fluidRange } from 'polished';
import styled, { breakpoints } from '../../../../styles';

export const LogoImage = styled.img`
  vertical-align: middle;
  cursor: pointer;

  ${fluidRange(
    {
      prop: 'width',
      fromSize: '80px',
      toSize: '120px'
    },
    `${breakpoints.small}px`,
    `${breakpoints.extraLarge}px`
  )};
`;
