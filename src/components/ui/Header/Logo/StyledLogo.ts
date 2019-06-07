import { fluidRange } from 'polished';
import styled, { breakpoints, StyledProps } from '../../../../styles';

export const LogoImage = styled.img.attrs((props: StyledProps<any>) => ({
  src: props.theme.logo
}))`
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
