import React from 'react';
import { shallow } from 'enzyme';
import Routes from './Routes';

describe('Routes', () => {
  it('renders a snapshot', () => {
    const component = shallow(<Routes />);

    expect(component).toMatchSnapshot();
  });
});
