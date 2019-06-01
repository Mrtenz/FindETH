import React from 'react';
import { shallow } from 'enzyme';
import Address from './Address';

it('renders an address', () => {
  const wrapper = shallow(<Address address="0x4bbeEB066eD09B7AEd07bF39EEe0460DFa261520" />);

  expect(wrapper.prop('truncate')).toBeFalsy();
  expect(wrapper.contains('0x4bbeEB066eD09B7AEd07bF39EEe0460DFa261520')).toBe(true);
});

it('renders a truncated address', () => {
  const wrapper = shallow(
    <Address address="0x4bbeEB066eD09B7AEd07bF39EEe0460DFa261520" truncate={true} />
  );

  expect(wrapper.contains('0x4bbe...1520')).toBe(true);
});
