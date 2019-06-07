import styled from '../../../styles';
import { Panel as UIPanel } from '@mycrypto/ui';

const Panel = styled(UIPanel)`
  padding: 1.5rem 2.25rem;
  width: 11.3906rem;
  height: 11.3906rem;
  box-shadow: ${({ theme }) => theme.panelShadow};
`;

export default Panel;
