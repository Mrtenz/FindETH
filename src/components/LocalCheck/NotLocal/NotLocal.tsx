import React, { FunctionComponent } from 'react';
import Typography from '../../ui/Typography';
import ExternalLink from '../../ui/ExternalLink';

const NotLocal: FunctionComponent = () => (
  <Typography>
    For security reasons, this feature is only available locally. See{' '}
    <ExternalLink to="https://github.com/Mrtenz/FindETH">GitHub</ExternalLink> for instructions on
    running FindETH locally.
  </Typography>
);

export default NotLocal;
