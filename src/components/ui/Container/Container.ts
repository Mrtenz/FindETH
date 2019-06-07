import styled from 'styled-components';
import { media } from '../../../styles';

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
  box-sizing: border-box;
  
  ${media.max.extraSmall`
    max-width: 100%;
  `}
  
  ${media.small`
    max-width: 540px;
  `}
  
  ${media.medium`
    max-width: 720px;
  `}
  
  ${media.large`
    max-width: 960px;
  `}
  
  ${media.extraLarge`
    max-width: 1140px;
  `}
`;

export default Container;
