import React from 'react';
import { mount, shallow } from 'enzyme';
import Message from './Message';

it('renders a snapshot', () => {
  const component = shallow(<Message type="info">Foo</Message>);

  expect(component).toMatchSnapshot();
});

it('renders the children', () => {
  const component = shallow(<Message type="info">Foo</Message>);

  expect(component.contains('Foo')).toBe(true);
});

it('changes the color based on the type', () => {
  const component = mount(<Message type="info">Foo</Message>);

  expect(component).toHaveStyleRule('background', '#f3f3f3');

  component.setProps({ type: 'error' });

  expect(component).toHaveStyleRule('background', '#ffbcb3');
});
