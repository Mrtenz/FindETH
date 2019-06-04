import React, { FunctionComponent } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Panel } from '@mycrypto/ui';
import { PanelContainer, PanelHeader, PanelImage } from './StyledClickablePanel';

interface OwnProps {
  title: string;
  icon: string;
  to?: string;
  onClick?(): void;
}

type Props = OwnProps & RouteComponentProps;

export const ClickablePanel: FunctionComponent<Props> = ({ title, to, icon, history, onClick }) => {
  const handleClick = () => {
    if (to) {
      history.push(to);
    }
  };

  return (
    <PanelContainer>
      <Panel onClick={onClick || handleClick}>
        <PanelHeader as="h3">{title}</PanelHeader>
        <PanelImage src={icon} alt={title} />
      </Panel>
    </PanelContainer>
  );
};

export default withRouter(ClickablePanel);
