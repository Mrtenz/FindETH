import React from 'react';
import { shallow } from 'enzyme';
import { StyledClickableText } from './StyledClickableText';

it('renders a snapshot', () => {
  const component = shallow(<StyledClickableText>Foo</StyledClickableText>);

  expect(component).toMatchSnapshot();
});

it('renders its children', () => {
  const component = shallow(<StyledClickableText>Foo</StyledClickableText>);

  expect(component.contains('Foo')).toBe(true);
});
