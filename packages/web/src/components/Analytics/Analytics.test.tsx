import React from 'react';
import { mount } from 'enzyme';
import Analytics from './Analytics';
import { MemoryRouter, Router } from 'react-router-dom';

describe('Routes', () => {
  it('renders a snapshot', () => {
    const component = mount(
      <MemoryRouter initialEntries={[{ pathname: '/', key: 'test' }]}>
        <Analytics>Foo</Analytics>
      </MemoryRouter>
    );
    expect(component).toMatchSnapshot();
  });

  it('keeps track of navigation', () => {
    // tslint:disable-next-line
    const _paq: string[][] = ((window as any)._paq = []);

    const component = mount(
      <MemoryRouter>
        <Analytics>Foo</Analytics>
      </MemoryRouter>
    );

    const history = component.find(Router).prop('history');
    history.push('/foo');

    expect(_paq).toHaveLength(2);
    expect(_paq).toStrictEqual([['setCustomUrl', '/foo'], ['trackPageView']]);
  });
});
