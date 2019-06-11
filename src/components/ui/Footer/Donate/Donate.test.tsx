import React from 'react';
import { shallow } from 'enzyme';
import Donate from './Donate';

it('renders a snapshot', () => {
  const component = shallow(<Donate />);

  expect(component).toMatchSnapshot();
});
