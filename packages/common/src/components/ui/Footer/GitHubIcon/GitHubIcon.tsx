import React, { FunctionComponent } from 'react';
import githubIcon from '../../../../assets/images/logos/github-white.svg';
import { StyledGitHubIcon } from './StyledGitHubIcon';
import ExternalLink from '../../ExternalLink';

const GitHubIcon: FunctionComponent = () => (
  <ExternalLink to="https://github.com/Mrtenz/FindETH">
    <StyledGitHubIcon src={githubIcon} />
  </ExternalLink>
);

export default GitHubIcon;
