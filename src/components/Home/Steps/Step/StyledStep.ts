import styled from 'styled-components';
import { Typography } from '@mycrypto/ui';
import { EXTRA_SMALL_DISPLAYS, SMALL_DISPLAYS } from '../../../../constants';

export const StyledStep = styled.div`
  position: relative;
  margin-bottom: 25px;
  display: flex;
  flex-flow: row nowrap;

  @media ${SMALL_DISPLAYS} {
    align-content: center;
  }
`;

export const StyledStepIcon = styled.div`
  width: 50px;
  min-width: 50px;
  height: 50px;
  border-radius: 100px;
  background: ${({ theme }) => theme.primary};
`;

export const StyledLine = styled.div`
  position: absolute;
  width: 1px;
  height: 15px;
  top: 55px;
  left: 25px;
  background: ${({ theme }) => theme.headline};

  @media ${EXTRA_SMALL_DISPLAYS} {
    display: none;
  }
`;

export const StyledStepContents = styled.div`
  margin-left: 18px;

  @media ${SMALL_DISPLAYS} {
    margin-left: 9px;
    display: flex;
    align-items: center;
  }
`;

export const IconTypography = styled(Typography)`
  margin: 0;
  padding: 0;
  color: white;
  text-align: center;
  line-height: 50px;
`;
