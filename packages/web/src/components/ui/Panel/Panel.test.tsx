import React from 'react';
import { shallow } from 'enzyme';
import Panel from './Panel';

it('renders a snapshot', () => {
  const component = shallow(<Panel>Foo</Panel>);

  expect(component).toMatchSnapshot();
});

it('renders with text', () => {
  const component = shallow(<Panel>Foo</Panel>);

  expect(component.contains('Foo')).toBe(true);
});
