import React, { FunctionComponent } from 'react';
import {
  IconTypography,
  StyledLine,
  StyledStep,
  StyledStepContents,
  StyledStepIcon
} from './StyledStep';
import { Col, Row } from 'styled-bootstrap-grid';

interface Props {
  icon: string;
  showLine?: boolean;
}

export const Step: FunctionComponent<Props> = ({ icon, children, showLine = true }) => (
  <Row>
    <Col>
      <StyledStep>
        <StyledStepIcon>
          <IconTypography>
            {icon}
          </IconTypography>
        </StyledStepIcon>
        {showLine && <StyledLine/>}
        <StyledStepContents>
          {children}
        </StyledStepContents>
      </StyledStep>
    </Col>
  </Row>
);

export default Step;
