import React from 'react';
import { shallow } from 'enzyme';
import { EnsureConnection } from './EnsureConnection';
import {
  NETWORK_MAINNET,
  NETWORK_OFFLINE,
  NETWORK_TESTNET,
  NETWORK_UNKNOWN
} from '@findeth/shared';
import Spinner from '../ui/Spinner';

describe('Routes', () => {
  it('renders a snapshot', () => {
    const component = shallow(<EnsureConnection network={NETWORK_OFFLINE}>Foo</EnsureConnection>);

    expect(component).toMatchSnapshot();
  });

  it('does not render the children when offline or not on the mainnet', () => {
    const component = shallow(<EnsureConnection network={NETWORK_OFFLINE}>Foo</EnsureConnection>);
    expect(component.contains('Foo')).toBe(false);

    component.setProps({ network: NETWORK_TESTNET });
    expect(component.contains('Foo')).toBe(false);

    component.setProps({ network: NETWORK_UNKNOWN });
    expect(component.contains('Foo')).toBe(false);

    component.setProps({ network: NETWORK_MAINNET });
    expect(component.contains('Foo')).toBe(true);
  });

  it('shows a spinner when no network is set', () => {
    const component = shallow(<EnsureConnection>Foo</EnsureConnection>);
    expect(component.contains('Foo')).toBe(false);
    expect(component.exists(Spinner)).toBe(true);

    component.setProps({ network: NETWORK_MAINNET });
    expect(component.contains('Foo')).toBe(true);
    expect(component.exists(Spinner)).toBe(false);
  });
});
