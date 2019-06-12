import styled from 'styled-components';
import { FooterTypography } from '../StyledFooter';
import ExternalLink from '../../ExternalLink';
import { media } from '../../../../styles';

export const DonateContainer = styled(FooterTypography).attrs({ muted: true })`
  font-size: 0.75rem !important;
  margin-top: 0.3rem;
`;

export const Address = styled(ExternalLink)`
  display: none;
  ${media.small`
    display: inline-block;
  `};
`;

export const SmallAddress = styled(ExternalLink)`
  display: none;
  ${media.max.small`
    display: inline-block;
  `};
`;
