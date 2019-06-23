import React from 'react';
import { shallow } from 'enzyme';
import Grid from './Grid';

it('renders a snapshot', () => {
  const component = shallow(<Grid columnWidth="1rem" gap="1rem" />);

  expect(component).toMatchSnapshot();
});
