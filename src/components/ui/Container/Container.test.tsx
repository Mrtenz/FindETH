import React from 'react';
import { shallow } from 'enzyme';
import Container from './Container';

it('renders a snapshot', () => {
  const component = shallow(<Container>Foo</Container>);

  expect(component).toMatchSnapshot();
});

it('renders with text', () => {
  const component = shallow(<Container>Foo</Container>);

  expect(component.contains('Foo')).toBe(true);
});
