import React, { FunctionComponent } from 'react';

interface Props {
  to: string;
}

const ExternalLink: FunctionComponent<Props> = ({ to, children }) => (
  <a href={to} target="_blank" rel="noreferrer nofollower">
    {children}
  </a>
);

export default ExternalLink;
