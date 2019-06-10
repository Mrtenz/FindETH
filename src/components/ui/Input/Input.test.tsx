import React from 'react';
import { shallow } from 'enzyme';
import Input from './Input';

it('renders a snapshot', () => {
  const component = shallow(<Input value="Foo" />);

  expect(component).toMatchSnapshot();
});
