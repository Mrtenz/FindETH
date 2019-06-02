import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

it('renders a snapshot', () => {
  const component = shallow(<Footer />);

  expect(component).toMatchSnapshot();
});
