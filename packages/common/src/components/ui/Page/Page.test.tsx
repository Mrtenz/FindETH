import React from 'react';
import { shallow } from 'enzyme';
import Page from './Page';

it('renders a snapshot', () => {
  const component = shallow(<Page>Foo</Page>);

  expect(component).toMatchSnapshot();
});

it('renders with text', () => {
  const component = shallow(<Page>Foo</Page>);

  expect(component.contains('Foo')).toBe(true);
});
