import React from 'react';
import { shallow } from 'enzyme';
import ClickableText from './ClickableText';

it('renders a snapshot', () => {
  const component = shallow(<ClickableText>Foo</ClickableText>);

  expect(component).toMatchSnapshot();
});

it('renders its children', () => {
  const component = shallow(<ClickableText>Foo</ClickableText>);

  expect(component.contains('Foo')).toBe(true);
});
