import React from 'react';
import { mount } from 'enzyme';
import NotLocal from './NotLocal';

describe('NotLocal', () => {
  it('renders a snapshot', () => {
    const component = mount(<NotLocal />);
    expect(component).toMatchSnapshot();
  });
});
