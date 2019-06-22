import React from 'react';
import { shallow } from 'enzyme';
import ButtonLink from './ButtonLink';

it('renders a snapshot', () => {
  const component = shallow(<ButtonLink to="/foo">Foo</ButtonLink>);

  expect(component).toMatchSnapshot();
});

it('renders with text', () => {
  const component = shallow(<ButtonLink to="/foo">Foo</ButtonLink>);

  expect(component.contains('Foo')).toBe(true);
});
