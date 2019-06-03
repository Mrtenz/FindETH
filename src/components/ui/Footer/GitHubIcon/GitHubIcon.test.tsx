import React from 'react';
import { shallow } from 'enzyme';
import GitHubIcon from './GitHubIcon';

it('renders a snapshot', () => {
  const component = shallow(<GitHubIcon />);

  expect(component).toMatchSnapshot();
});
