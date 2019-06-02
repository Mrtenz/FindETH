import React from 'react';
import { shallow } from 'enzyme';
import Spinner from './Spinner';

it('renders a snapshot', () => {
  const component = shallow(<Spinner />);

  expect(component).toMatchSnapshot();
});
