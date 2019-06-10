import React, { FunctionComponent } from 'react';
import { Theme } from '../../styles';
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';
import { ApplicationState } from '../../store';
import { setTheme } from '../../store/ui';
import { Toggle } from './StyledThemeToggle';
import Moon from '!!react-svg-loader!../../assets/images/icons/moon.svg';
import Sun from '!!react-svg-loader!../../assets/images/icons/sun.svg';

interface StateProps {
  theme: Theme;
}

interface DispatchProps {
  handleSetTheme(theme: Theme): void;
}

type Props = StateProps & DispatchProps;

const ThemeProvider: FunctionComponent<Props> = ({ theme, handleSetTheme }) => {
  const handleSetDarkTheme = () => handleSetTheme(Theme.Dark);

  const handleSetLightTheme = () => handleSetTheme(Theme.Light);

  if (theme === Theme.Light) {
    return (
      <Toggle onClick={handleSetDarkTheme}>
        <Moon />
      </Toggle>
    );
  }

  return (
    <Toggle onClick={handleSetLightTheme}>
      <Sun />
    </Toggle>
  );
};

const mapStateToProps: MapStateToProps<StateProps, {}, ApplicationState> = state => ({
  theme: state.ui.theme
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = dispatch => ({
  handleSetTheme: (theme: Theme) => dispatch(setTheme(theme))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ThemeProvider);
