import styled, { keyframes } from 'styled-components';

const firstAnimation = keyframes`
  0% {
    transform: scale(0);
  }
  
  100% {
    transform: scale(1);
  }
`;

const secondAnimation = keyframes`
  0% {
    transform: translate(0, 0);
  }
  
  100% {
    transform: translate(19px, 0);
  }
`;

const thirdAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  
  100% {
    transform: scale(0);
  }
`;

const StyledSpinner = styled.div`
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;

  div {
    position: absolute;
    top: 27px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: ${({ theme }) => theme.link};
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }

  div:nth-child(1) {
    left: 6px;
    animation: ${firstAnimation} 0.6s infinite;
  }

  div:nth-child(2) {
    left: 6px;
    animation: ${secondAnimation} 0.6s infinite;
  }

  div:nth-child(3) {
    left: 26px;
    animation: ${secondAnimation} 0.6s infinite;
  }

  div:nth-child(4) {
    left: 45px;
    animation: ${thirdAnimation} 0.6s infinite;
  }
`;

export default StyledSpinner;
