import React from 'react';
import { shallow } from 'enzyme';
import Address from './Address';

it('renders a snapshot', () => {
  const component = shallow(<Address address="0x4bbeEB066eD09B7AEd07bF39EEe0460DFa261520" />);

  expect(component).toMatchSnapshot();
});

it('renders an address', () => {
  const component = shallow(<Address address="0x4bbeEB066eD09B7AEd07bF39EEe0460DFa261520" />);

  expect(component.prop('truncate')).toBeFalsy();
  expect(component.contains('0x4bbeEB066eD09B7AEd07bF39EEe0460DFa261520')).toBe(true);
});

it('renders a truncated address', () => {
  const component = shallow(
    <Address address="0x4bbeEB066eD09B7AEd07bF39EEe0460DFa261520" truncate={true} />
  );

  expect(component.contains('0x4bbe...1520')).toBe(true);
});
