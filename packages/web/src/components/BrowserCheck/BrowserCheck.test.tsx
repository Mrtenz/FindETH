import React from 'react';
import { mount } from 'enzyme';
import BrowserCheck from './BrowserCheck';
import BrowserUnsupported from './BrowserUnsupported';

describe('Routes', () => {
  it('renders a snapshot', () => {
    const component = mount(<BrowserCheck>Foo</BrowserCheck>);
    expect(component).toMatchSnapshot();
  });

  it('renders the children if the browser is supported', () => {
    let component = mount(<BrowserCheck>Foo</BrowserCheck>);
    expect(component.contains('Foo')).toBe(true);

    BigInt = undefined as any;
    component = mount(<BrowserCheck>Foo</BrowserCheck>);
    expect(component.contains('Foo')).toBe(false);
    expect(component.exists(BrowserUnsupported)).toBe(true);
  });
});
