import React, { FunctionComponent } from 'react';
import { StyledSpinner, StyledSpinnerContainer, StyledSpinnerTypography } from './StyledSpinner';

interface Props {
  width?: number;
  height?: number;
}

const Spinner: FunctionComponent<Props> = ({ width = 25, height = 25, children }) => (
  <StyledSpinnerContainer>
    <StyledSpinner width={width} height={height} />
    <StyledSpinnerTypography muted={true}>{children}</StyledSpinnerTypography>
  </StyledSpinnerContainer>
);

export default Spinner;
