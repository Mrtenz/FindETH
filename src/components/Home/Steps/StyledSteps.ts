import styled from 'styled-components';
import { Typography } from '@mycrypto/ui';
import { SMALL_DISPLAYS } from '../../../config';

export const StepsTypography = styled(Typography)`
  margin: 10px 0 0;

  @media ${SMALL_DISPLAYS} {
    margin-top: 0;
  }
`;
