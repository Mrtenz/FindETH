import React from 'react';
import { mount, shallow } from 'enzyme';
import { ThemeProvider } from './ThemeProvider';
import { darkTheme, lightTheme, Theme, ThemeProvider as StyledThemeProvider } from '../../styles';

describe('ThemeToggle', () => {
  it('renders a snapshot', () => {
    const component = shallow(<ThemeProvider theme={Theme.Light} />);
    expect(component).toMatchSnapshot();
  });

  it('applies the current theme', () => {
    const component = mount(<ThemeProvider theme={Theme.Light} />);
    expect(component.find(StyledThemeProvider).prop('theme')).toStrictEqual(lightTheme);

    component.setProps({ theme: Theme.Dark });
    expect(component.find(StyledThemeProvider).prop('theme')).toStrictEqual(darkTheme);
  });
});
