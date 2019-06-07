import styled from 'styled-components';
import { Typography } from '@mycrypto/ui';
import { media } from '../../../styles';

export const FooterItem = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const FooterContainer = styled.footer`
  display: flex;
  margin: 1rem 0;

  ${media.max.medium`
    flex-direction: column;
  `};

  p {
    color: white;
    font-size: 1rem !important;
  }

  & ${FooterItem}:not(:first-child):not(:last-child) {
    ${media.max.medium`
      margin: 0.75rem 0;
    `};
  }

  & ${FooterItem}:first-child {
    ${media.medium`
      justify-content: flex-start;
    `};
  }

  & ${FooterItem}:last-child {
    ${media.medium`
      justify-content: flex-end;
    `};
  }
`;

export const FooterTypography = styled(Typography)`
  margin: 0;
`;
