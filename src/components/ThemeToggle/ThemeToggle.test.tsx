import React from 'react';
import { mount, shallow } from 'enzyme';
import { ThemeToggle } from './ThemeToggle';
import { Theme } from '../../styles';
import { Toggle } from './StyledThemeToggle';

describe('ThemeToggle', () => {
  it('renders a snapshot', () => {
    const component = shallow(<ThemeToggle theme={Theme.Light} handleSetTheme={jest.fn()} />);
    expect(component).toMatchSnapshot();
  });

  it('calls a function when clicked', () => {
    const handleSetTheme = jest.fn();
    const component = mount(<ThemeToggle theme={Theme.Light} handleSetTheme={handleSetTheme} />);

    component.find(Toggle).simulate('click');
    expect(handleSetTheme).toHaveBeenCalledTimes(1);
  });
});
