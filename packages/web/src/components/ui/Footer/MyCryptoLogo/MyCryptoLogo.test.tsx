import React from 'react';
import { shallow } from 'enzyme';
import MyCryptoLogo from './MyCryptoLogo';

it('renders a snapshot', () => {
  const component = shallow(<MyCryptoLogo />);

  expect(component).toMatchSnapshot();
});
