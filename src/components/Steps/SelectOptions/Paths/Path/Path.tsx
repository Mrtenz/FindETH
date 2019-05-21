import React, { FunctionComponent } from 'react';
import { connect, MapDispatchToProps } from 'react-redux';
import { Typography } from '@mycrypto/ui';
import { DerivationPath } from '../../../../../constants';
import { SmallTypography, StyledPath } from './StyledPath';
import { addDerivationPath, removeDerivationPath } from '../../../../../store/search';
import { Col, Row } from 'styled-bootstrap-grid';

interface OwnProps {
  path: DerivationPath;
  isSelected: boolean;
}

interface DispatchProps {
  handleToggle(): void;
}

type Props = OwnProps & DispatchProps;

const Path: FunctionComponent<Props> = ({ path, handleToggle, isSelected }) => (
  <Col sm={4} onClick={handleToggle}>
    <StyledPath>
      <Row>
        <Col xs={2} alignSelf="center">
          <input type="checkbox" checked={isSelected} readOnly={true} />
        </Col>
        <Col xs={10}>
          <Typography>{path.name}</Typography>
          <SmallTypography muted={true}>{path.prefix}</SmallTypography>
        </Col>
      </Row>
    </StyledPath>
  </Col>
);

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = (
  dispatch,
  { path, isSelected }
) => ({
  handleToggle(): void {
    if (isSelected) {
      dispatch(removeDerivationPath(path));
    } else {
      dispatch(addDerivationPath(path));
    }
  }
});

export default connect(
  () => ({}),
  mapDispatchToProps
)(Path);
