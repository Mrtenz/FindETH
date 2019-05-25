import styled from 'styled-components';

interface Props {
  type: 'info' | 'error';
}

const getColor = (type: 'info' | 'error'): string => {
  switch (type) {
    case 'info':
      return '#f3f3f3';
    case 'error':
      return '#ffbcb3';
  }
};

export const StyledMessage = styled.div<Props>`
  padding: 25px;
  background: ${({ type }) => getColor(type)};
`;
