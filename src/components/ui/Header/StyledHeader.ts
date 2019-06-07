import styled, { media } from '../../../styles';
import Heading from '../Heading';

export const StyledHeading = styled(Heading)`
  text-align: center;
  overflow: hidden;

  &:before,
  &:after {
    ${media.extraSmall`
      position: relative;
      background-color: ${({ theme }) => theme.line};
      content: '';
      display: inline-block;
      height: 1px;
      vertical-align: middle;
      width: 50%;
    `};
  }

  &:before {
    ${media.extraSmall`
      right: 0.5em;
      margin-left: -50%;
    `};
  }

  &:after {
    ${media.extraSmall`
      left: 0.5em;
      margin-right: -50%;
    `};
  }
`;
