import React, { AnchorHTMLAttributes, DetailedHTMLProps, FunctionComponent } from 'react';

interface OwnProps {
  to: string;
}

type Props = OwnProps &
  Omit<
    DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>,
    'href' | 'target' | 'rel'
  >;

const ExternalLink: FunctionComponent<Props> = ({ to, children, ...props }) => (
  <a href={to} target="_blank" rel="noreferrer nofollower" {...props}>
    {children}
  </a>
);

export default ExternalLink;
