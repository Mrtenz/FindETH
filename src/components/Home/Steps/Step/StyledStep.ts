import styled from 'styled-components';
import { Typography } from '@mycrypto/ui';

const MEDIA_TAG = 'screen and (max-width: 550px)';

export const StyledStep = styled.div`
  position: relative;
  margin-bottom: 25px;
  display: flex;
  flex-flow: row wrap;
  
  @media ${MEDIA_TAG} {
    flex-flow: column nowrap;
  }
`;

export const StyledStepIcon = styled.div`
  width: 50px;
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
  
  @media ${MEDIA_TAG} {
    display: none;
  }
`;

export const StyledStepContents = styled.div`
  margin-left: 18px;
  
  @media ${MEDIA_TAG} {
    margin-left: 0;
  }
`;

export const IconTypography = styled(Typography)`
  margin: 0;
  padding: 0;
  color: white;
  text-align: center;
  line-height: 50px;
`;
