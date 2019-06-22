import React from 'react';
import { shallow } from 'enzyme';
import { StyledAlign } from './StyledAlign';

it('renders a snapshot', () => {
  const component = shallow(<StyledAlign align="left">Foo</StyledAlign>);

  expect(component).toMatchSnapshot();
  expect(component.prop('flexWrap')).toBeFalsy();
});

it('renders the children', () => {
  const component = shallow(<StyledAlign align="left">Foo</StyledAlign>);

  expect(component.contains('Foo')).toBe(true);
});
