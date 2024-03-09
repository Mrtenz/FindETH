import styled from 'styled-components';
import Typography from '../Typography';

const ClickableText = styled(Typography)`
  cursor: pointer;
  color: ${({ theme }) => theme.link};
  text-decoration: none;
  font-weight: bold;
`;

export default ClickableText;
