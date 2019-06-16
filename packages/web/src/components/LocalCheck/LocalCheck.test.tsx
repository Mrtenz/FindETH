import React from 'react';
import { mount } from 'enzyme';
import NotLocal from './NotLocal';

const cachedEnv = process.env;

beforeEach(() => {
  jest.resetModules();
  process.env = { ...cachedEnv };
});

afterEach(() => {
  process.env = cachedEnv;
});

describe('LocalCheck', () => {
  it('renders a snapshot', async () => {
    process.env.IS_LOCAL = 'false';
    process.env.NODE_ENV = 'production';

    // Dynamic import here is required, to make sure we can set the environment variables before
    // loading the module
    const { default: LocalCheck } = await import('./LocalCheck');

    const component = mount(<LocalCheck>Foo</LocalCheck>);
    expect(component).toMatchSnapshot();
  });

  it('renders the children if local', async () => {
    process.env.IS_LOCAL = 'true';
    const { default: LocalCheck } = await import('./LocalCheck');

    const component = mount(<LocalCheck>Foo</LocalCheck>);
    expect(component.contains('Foo')).toBe(true);
  });

  it('renders a component if not local', async () => {
    process.env.IS_LOCAL = 'false';
    process.env.NODE_ENV = 'production';
    const { default: LocalCheck } = await import('./LocalCheck');

    const component = mount(<LocalCheck>Foo</LocalCheck>);
    expect(component.find(NotLocal)).toBeTruthy();
  });
});
