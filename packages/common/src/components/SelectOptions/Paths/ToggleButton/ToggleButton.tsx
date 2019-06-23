import React, { FunctionComponent } from 'react';
import { StyledToggleButton } from './StyledToggleButton';
import { connect, MapDispatchToProps } from 'react-redux';
import { toggleDerivationPaths } from '../../../../store/search';

interface OwnProps {
  state: boolean;
}

interface DispatchProps {
  toggleAll(): void;
}

type Props = OwnProps & DispatchProps;

const ToggleButton: FunctionComponent<Props> = ({ toggleAll, children }) => {
  return (
    <StyledToggleButton secondary={true} onClick={toggleAll}>
      {children}
    </StyledToggleButton>
  );
};

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = (dispatch, { state }) => ({
  toggleAll: () => dispatch(toggleDerivationPaths(state))
});

export default connect(
  null,
  mapDispatchToProps
)(ToggleButton);
