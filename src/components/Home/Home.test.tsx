import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

describe('Home', () => {
  it('renders a snapshot', () => {
    const component = shallow(<Home />);
    expect(component).toMatchSnapshot();
  });
});
