import React from 'react';
import { shallow } from 'enzyme';
import Section from './Section';

it('renders a snapshot', () => {
  const component = shallow(<Section>Foo</Section>);

  expect(component).toMatchSnapshot();
});

it('renders with text', () => {
  const component = shallow(<Section>Foo</Section>);

  expect(component.contains('Foo')).toBe(true);
});
