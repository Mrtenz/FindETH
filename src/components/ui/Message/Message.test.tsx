import React from 'react';
import { mount, shallow } from 'enzyme';
import { StyledMessage } from './StyledMessage';

it('renders a snapshot', () => {
  const component = shallow(<StyledMessage type="info">Foo</StyledMessage>);

  expect(component).toMatchSnapshot();
});

it('renders the children', () => {
  const component = shallow(<StyledMessage type="info">Foo</StyledMessage>);

  expect(component.contains('Foo')).toBe(true);
});

it('changes the color based on the type', () => {
  const component = mount(<StyledMessage type="info">Foo</StyledMessage>);

  expect(component).toHaveStyleRule('background', '#f3f3f3');

  component.setProps({ type: 'error' });

  expect(component).toHaveStyleRule('background', '#ffbcb3');
});
