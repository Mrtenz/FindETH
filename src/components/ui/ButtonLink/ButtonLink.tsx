import React, { FunctionComponent } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import Button from '../Button';

type Props = LinkProps;

const ButtonLink: FunctionComponent<Props> = ({ children, ...props }) => (
  <Link {...props}>
    <Button>{children}</Button>
  </Link>
);

export default ButtonLink;
