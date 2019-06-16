import React from 'react';
import { shallow } from 'enzyme';
import FAQ from './FAQ';

describe('FAQ', () => {
  it('renders a snapshot', () => {
    const component = shallow(<FAQ />);
    expect(component).toMatchSnapshot();
  });
});
