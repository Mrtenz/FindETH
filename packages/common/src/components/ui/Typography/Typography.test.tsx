import React from 'react';
import { shallow } from 'enzyme';
import Typography from './Typography';

it('renders a snapshot', () => {
  const component = shallow(<Typography>Foo</Typography>);

  expect(component).toMatchSnapshot();
});

it('renders the children', () => {
  const component = shallow(<Typography>Foo</Typography>);

  expect(component.contains('Foo')).toBe(true);
});
