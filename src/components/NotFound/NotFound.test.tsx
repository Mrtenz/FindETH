import React from 'react';
import { mount, shallow } from 'enzyme';
import NotFound from './NotFound';
import { MemoryRouter, Router } from 'react-router-dom';

describe('NotFound', () => {
  it('renders a snapshot', () => {
    const component = shallow(<NotFound />);

    expect(component).toMatchSnapshot();
  });

  it('redirects to the homepage', () => {
    const component = mount(
      <MemoryRouter initialEntries={['/foo']}>
        <NotFound />
      </MemoryRouter>
    );

    const history = component.find(Router).prop('history');
    expect(history.location.pathname).toBe('/');
  });
});
