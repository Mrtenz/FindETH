import React from 'react';
import { shallow } from 'enzyme';
import Spinner from './Spinner';
import { StyledSpinner } from './StyledSpinner';

it('renders a snapshot', () => {
  const component = shallow(<Spinner>Foo</Spinner>);

  expect(component).toMatchSnapshot();
});

it('renders the children', () => {
  const component = shallow(<Spinner>Foo</Spinner>);

  expect(component.contains('Foo')).toBe(true);
});

it('changes width and height based on the props', () => {
  const component = shallow(<Spinner>Foo</Spinner>);

  expect(component.find(StyledSpinner).props()).toStrictEqual({ width: 25, height: 25 });

  component.setProps({ width: 50, height: 50 });

  expect(component.find(StyledSpinner).props()).toStrictEqual({ width: 50, height: 50 });
});
