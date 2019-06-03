import React from 'react';
import { shallow } from 'enzyme';
import Code from './StyledCode';

it('renders a snapshot', () => {
  const component = shallow(<Code>Foo</Code>);

  expect(component).toMatchSnapshot();
});

it('renders its children', () => {
  const component = shallow(<Code>Foo</Code>);

  expect(component.contains('Foo')).toBe(true);
});
