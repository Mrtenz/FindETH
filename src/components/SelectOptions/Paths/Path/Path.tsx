import React, { FunctionComponent } from 'react';
import { connect, MapDispatchToProps } from 'react-redux';
import Typography from '../../../ui/Typography';
import { DerivationPath } from '../../../../config';
import { StyledPath, StyledPathInfo, StyledSwitch } from './StyledPath';
import { addDerivationPath, removeDerivationPath } from '../../../../store/search';
import Switch from '../../../ui/Switch';
import SmallPanel from '../../../ui/SmallPanel';

interface OwnProps {
  path: DerivationPath;
  isSelected: boolean;
}

interface DispatchProps {
  handleToggle(): void;
}

type Props = OwnProps & DispatchProps;

const Path: FunctionComponent<Props> = ({ path, handleToggle, isSelected }) => (
  <SmallPanel noMargin={true}>
    <StyledPath>
      <StyledPathInfo>
        <Typography>{path.name}</Typography>
        <Typography small={true} muted={true}>
          {path.prefix}
        </Typography>
      </StyledPathInfo>
      <StyledSwitch>
        <Switch checked={isSelected} onToggle={handleToggle} />
      </StyledSwitch>
    </StyledPath>
  </SmallPanel>
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
