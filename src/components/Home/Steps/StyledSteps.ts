import styled from 'styled-components';
import { Typography } from '@mycrypto/ui';
import { SMALL_DISPLAYS } from '../../../constants';

export const StepsTypography = styled(Typography)`
  margin: 10px 0 0;

  @media ${SMALL_DISPLAYS} {
    line-height: 50px;
    margin-top: 0;
  }
`;
