import React, { FunctionComponent } from 'react';
import { Heading } from '@mycrypto/ui';
import Typography from '../../ui/Typography';
import { DerivationPath } from '../../../config';
import { chunk } from '../../../utils';
import { connect, MapStateToProps } from 'react-redux';
import { ApplicationState } from '../../../store';
import Path from './Path';
import Wallet from '../../../wallets/Wallet';
import ToggleButton from './ToggleButton/ToggleButton';
import { PathsContainer } from './StyledPaths';

interface StateProps {
  implementation: Wallet;
  derivationPaths: DerivationPath[];
}

type Props = StateProps;

const Paths: FunctionComponent<Props> = ({ implementation, derivationPaths }) => (
  <>
    <Heading as="h3">Derivation paths</Heading>
    <Typography>Choose the derivation paths to search in.</Typography>
    <ToggleButton state={true}>Select all</ToggleButton>
    <ToggleButton state={false}>Deselect all</ToggleButton>
    {chunk(implementation.getDerivationPaths(), 3).map((paths, index) => (
      <PathsContainer key={index}>
        {paths.map(path => (
          <Path key={path.prefix} path={path} isSelected={derivationPaths.includes(path)} />
        ))}
      </PathsContainer>
    ))}
  </>
);

const mapStateToProps: MapStateToProps<StateProps, {}, ApplicationState> = state => ({
  implementation: state.wallet.implementation!,
  derivationPaths: state.search.derivationPaths
});

export default connect(mapStateToProps)(Paths);
