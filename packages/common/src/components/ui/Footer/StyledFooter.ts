import styled, { media } from '../../../styles';
import Typography from '../Typography';
import { transparentize } from 'polished';

export const FooterItem = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterItemContainer = styled.div`
  text-align: center;

  ${media.medium`
    text-align: right;
  `};
`;

export const FooterContainer = styled.footer`
  display: flex;
  margin: 1rem 0;

  ${media.max.medium`
    flex-direction: column;
  `};

  & ${FooterItem}:not(:first-child):not(:last-child) {
    ${media.max.medium`
      margin: 0.75rem 0;
      order: -1;
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
  color: ${({ muted }) => (muted ? transparentize(0.25, 'white') : 'white')};
`;
