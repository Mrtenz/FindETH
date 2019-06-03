import React from 'react';
import { shallow } from 'enzyme';
import ExternalLink from './ExternalLink';

it('renders a snapshot', () => {
  const component = shallow(<ExternalLink to="https://example.com">Foo</ExternalLink>);

  expect(component).toMatchSnapshot();
});

it('renders an element with props and children', () => {
  const component = shallow(<ExternalLink to="https://example.com">Foo</ExternalLink>);

  expect(component.find('a').props().href).toBe('https://example.com');
  expect(component.contains('Foo')).toBe(true);
});
