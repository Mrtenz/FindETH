import styled, { css } from '../../../styles';
import { Panel as UIPanel } from '@mycrypto/ui';

interface Props {
  noMargin?: boolean;
}

const Panel = styled(UIPanel)<Props>`
  padding: 1.5rem 2.25rem;
  width: 11.3906rem;
  height: 11.3906rem;
  box-shadow: ${({ theme }) => theme.panelShadow};
  border: ${({ theme }) => theme.panelBorder};

  ${({ noMargin }) =>
    noMargin &&
    css`
      margin: 0;
    `};
`;

export default Panel;
