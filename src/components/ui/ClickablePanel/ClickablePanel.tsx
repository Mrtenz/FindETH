import React, { FunctionComponent } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { PanelContainer, PanelHeader, PanelImage } from './StyledClickablePanel';
import Panel from '../Panel';
import { ImageComponent } from 'react-svg-loader';

interface OwnProps {
  title: string;
  icon: ImageComponent;
  to?: string;

  onClick?(): void;
}

type Props = OwnProps & RouteComponentProps;

export const ClickablePanel: FunctionComponent<Props> = ({
  title,
  to,
  icon: Icon,
  history,
  onClick
}) => {
  const handleClick = () => {
    if (to) {
      history.push(to);
    }
  };

  return (
    <PanelContainer>
      <Panel onClick={onClick || handleClick}>
        <PanelHeader as="h3">{title}</PanelHeader>
        <PanelImage>
          <Icon />
        </PanelImage>
      </Panel>
    </PanelContainer>
  );
};

export default withRouter(ClickablePanel);
