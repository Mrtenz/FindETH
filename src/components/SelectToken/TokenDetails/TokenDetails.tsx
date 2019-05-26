import React, { FunctionComponent } from 'react';
import { Token } from '../../../store/tokens';
import { TokenList } from './StyledTokenDetails';

interface Props {
  token: Token;
}

const TokenDetails: FunctionComponent<Props> = ({ token }) => {
  const data = [
    {
      term: 'Name',
      definition: token.name
    },
    {
      term: 'Symbol',
      definition: token.symbol
    },
    {
      term: 'Decimals',
      definition: token.decimals
    }
  ];

  return <TokenList inline={true} descriptionData={data} />;
};

export default TokenDetails;
