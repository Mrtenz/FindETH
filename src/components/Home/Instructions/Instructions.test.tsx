import React from 'react';
import { shallow } from 'enzyme';
import Instructions from './Instructions';

describe('Instructions', () => {
  it('renders a snapshot', () => {
    const component = shallow(<Instructions />);
    expect(component).toMatchSnapshot();
  });
});
