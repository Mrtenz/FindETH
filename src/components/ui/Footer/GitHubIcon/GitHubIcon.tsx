import React, { FunctionComponent } from 'react';
import githubIcon from '../../../../assets/images/logos/github.svg';
import { StyledGitHubIcon } from './StyledGitHubIcon';

const GitHubIcon: FunctionComponent = () => (
  <a href="https://github.com/Mrtenz/FindETH" target="_blank">
    <StyledGitHubIcon src={githubIcon} />
  </a>
);

export default GitHubIcon;
