import React from 'react';
import { shallow } from 'enzyme';
import Heading from './Heading';

it('renders a snapshot', () => {
  const component = shallow(<Heading>Foo</Heading>);

  expect(component).toMatchSnapshot();
});

it('renders with text', () => {
  const component = shallow(<Heading>Foo</Heading>);

  expect(component.contains('Foo')).toBe(true);
});
