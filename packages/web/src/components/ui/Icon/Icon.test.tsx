import React from 'react';
import { shallow } from 'enzyme';
import { StyledIcon } from './StyledIcon';

it('renders a snapshot', () => {
  const component = shallow(<StyledIcon icon="add" />);

  expect(component).toMatchSnapshot();
});
