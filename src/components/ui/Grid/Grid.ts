import styled from '../../../styles';

interface Props {
  columnWidth: string;
  gap?: string;
}

const Grid = styled.div<Props>`
  display: grid;

  grid-template-columns: ${({ columnWidth = '1fr' }) =>
    `repeat(auto-fill, minmax(${columnWidth}, 1fr))`};
  grid-column-gap: ${({ gap }) => gap || '0'};
  grid-row-gap: ${({ gap }) => gap || '0'};

  margin-bottom: ${({ gap }) => gap || '0'};
`;

export default Grid;
