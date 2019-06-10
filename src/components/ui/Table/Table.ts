import styled, { media } from '../../../styles';
import { Table as UITable } from '@mycrypto/ui';

const getHeadings = (head: string[]): string => {
  return head.reduce<string>(
    (accumulator, name, index) => `
      ${accumulator}
      td:nth-of-type(${index + 1}):before {
        content: '${name}';
      }
    `,
    ''
  );
};

const Table = styled(UITable)`
  ${media.max.small`    
    &,
    thead,
    tbody,
    th,
    td,
    tr {
      display: block;
    }
    
    thead tr { 
      position: absolute;
      top: -9999px;
      left: -9999px;
    }
    
    tr {
      border: 1px solid ${props => props.theme.tableRowBorder};
      margin-bottom: 1.2rem;
      
      td:last-child {
        border-bottom: none;
      }
    }
    
    tr:last-of-type {
      margin-bottom: 0;
    }
    
    td { 
      border: none;
      border-bottom: 1px solid #eee; 
      position: relative;
      padding: 0.75rem 0.75rem 0.75rem 50%;
    }
    
    td:before { 
      position: absolute;
      height: 100%;
      top: 0;
      left: 0;
      width: 45%; 
      white-space: nowrap;
      color: ${props => props.theme.headline};
      text-transform: uppercase;
      letter-spacing: 0.0625em;
      background: ${props => props.theme.tableHeadBackground};
      box-sizing: border-box;
      padding: 0.75rem;
    }
    
    ${({ head }) => getHeadings(head)};
  `};
`;

export default Table;
