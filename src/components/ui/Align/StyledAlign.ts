import styled from 'styled-components';

interface Props {
  align: 'left' | 'center' | 'right';
}

export const StyledAlign = styled.div<Props>`
  display: flex;
  justify-content: ${({ align }) => align};
`;
