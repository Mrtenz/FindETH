import styled from '../../../styles';
import { Heading } from '@mycrypto/ui';

export const PanelContainer = styled.div`
  margin: 18px 18px 0 18px;
`;

export const PanelHeader = styled(Heading)`
  margin-top: 0;
`;

export const PanelImage = styled.div`
  svg {
    max-width: 75px;
    max-height: 75px;

    & > path {
      fill: ${({ theme }) => theme.headline};
    }
  }
`;
