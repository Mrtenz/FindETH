import React, { FunctionComponent } from 'react';
import { connect, MapDispatchToProps } from 'react-redux';
import { Typography } from '@mycrypto/ui';
import { DerivationPath } from '../../../../config';
import { SmallTypography, StyledPath, StyledPathInfo, StyledSwitch } from './StyledPath';
import { addDerivationPath, removeDerivationPath } from '../../../../store/search';
import { Col } from 'styled-bootstrap-grid';
import Switch from '../../../ui/Switch';
import { SmallPanel } from '../../../ui/SmallPanel/StyledSmallPanel';

interface OwnProps {
  path: DerivationPath;
  isSelected: boolean;
}

interface DispatchProps {
  handleToggle(): void;
}

type Props = OwnProps & DispatchProps;

const Path: FunctionComponent<Props> = ({ path, handleToggle, isSelected }) => (
  <Col sm={4}>
    <SmallPanel>
      <StyledPath>
        <StyledPathInfo>
          <Typography>{path.name}</Typography>
          <SmallTypography muted={true}>{path.prefix}</SmallTypography>
        </StyledPathInfo>
        <StyledSwitch>
          <Switch checked={isSelected} onToggle={handleToggle} />
        </StyledSwitch>
      </StyledPath>
    </SmallPanel>
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
