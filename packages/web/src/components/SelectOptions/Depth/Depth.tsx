import React, { ChangeEvent, FunctionComponent } from 'react';
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';
import { Heading, Input, Typography } from '@mycrypto/ui';
import { ApplicationState } from '../../../store';
import { setDepth } from '../../../store/search';
import { DerivationPath } from '../../../config';

interface StateProps {
  depth: number;
  derivationPaths: DerivationPath[];
}

interface DispatchProps {
  handleChange(event: ChangeEvent<HTMLInputElement>): void;
}

type Props = StateProps & DispatchProps;

const Depth: FunctionComponent<Props> = ({ depth, derivationPaths, handleChange }) => {
  return (
    <>
      <Heading as="h3">Depth</Heading>
      <Typography>
        Choose how many addresses to search for in each derivation path. The higher this number, the
        longer it will take.
      </Typography>

      <Input type="number" value={depth.toString()} onChange={handleChange} />

      <Typography muted={true}>
        Currently will search in {depth * derivationPaths.length} addresses
      </Typography>
    </>
  );
};

const mapStateToProps: MapStateToProps<StateProps, {}, ApplicationState> = state => ({
  depth: state.search.depth,
  derivationPaths: state.search.derivationPaths
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = dispatch => ({
  handleChange: event => dispatch(setDepth(Number(event.target.value)))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Depth);
