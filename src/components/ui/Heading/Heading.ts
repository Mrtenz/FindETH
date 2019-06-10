import styled, { css } from '../../../styles';
import { Heading as UIHeading } from '@mycrypto/ui';

interface Props {
  noMargin?: boolean;
}

const Heading = styled(UIHeading)<Props>`
  ${({ noMargin }) =>
    noMargin &&
    css`
      margin: 0;
    `};
`;

export default Heading;
