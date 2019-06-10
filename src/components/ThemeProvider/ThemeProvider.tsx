import React, { FunctionComponent } from 'react';
import { Theme, ThemeProvider as StyledThemeProvider, themes } from '../../styles';
import { connect, MapStateToProps } from 'react-redux';
import { ApplicationState } from '../../store';

interface StateProps {
  theme: Theme;
}

type Props = StateProps;

const ThemeProvider: FunctionComponent<Props> = ({ theme, children }) => (
  <StyledThemeProvider theme={themes[theme]}>{children}</StyledThemeProvider>
);

const mapStateToProps: MapStateToProps<StateProps, {}, ApplicationState> = state => ({
  theme: state.ui.theme
});

export default connect(mapStateToProps)(ThemeProvider);
