import React, { FunctionComponent } from 'react';
import { StyledTooltip, TooltipContainer, TooltipTypography } from './StyledTooltip';

interface Props {
  content: string;
}

const Tooltip: FunctionComponent<Props> = ({ content, children }) => (
  <TooltipContainer>
    <StyledTooltip>
      <TooltipTypography noMargin={true}>{content}</TooltipTypography>
    </StyledTooltip>
    {children}
  </TooltipContainer>
);

export default Tooltip;
