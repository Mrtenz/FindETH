import styled from 'styled-components';

interface Props {
  align: 'left' | 'center' | 'right' | 'space-between';
  flexWrap?: boolean;
}

export const StyledAlign = styled.div<Props>`
  display: flex;
  justify-content: ${({ align }) => align};
  flex-wrap: ${({ flexWrap = false }) => (flexWrap ? 'wrap' : 'nowrap')};
`;
