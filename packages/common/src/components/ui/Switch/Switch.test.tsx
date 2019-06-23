import React from 'react';
import { shallow } from 'enzyme';
import Switch from './Switch';
import { StyledSwitch } from './StyledSwitch';

it('renders a snapshot', () => {
  const handleToggle = jest.fn();
  const component = shallow(
    <Switch checked={true} onToggle={handleToggle}>
      Foo
    </Switch>
  );

  expect(component).toMatchSnapshot();
});

it('switches based on the props', () => {
  const handleToggle = jest.fn();
  const component = shallow(
    <Switch checked={false} onToggle={handleToggle}>
      Foo
    </Switch>
  );

  expect(component.find(StyledSwitch).prop('isOn')).toBe(false);

  component.setProps({ checked: true });

  expect(component.find(StyledSwitch).prop('isOn')).toBe(true);

  component.simulate('click');
  expect(handleToggle).toHaveBeenCalledTimes(1);
});
