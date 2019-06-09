import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './Header';
import { createMemoryHistory } from 'history';
import Modal from '../Modal';
import Logo from './Logo';

it('renders a snapshot', () => {
  const history = createMemoryHistory();

  const component = shallow(
    <Header
      isSearching={false}
      history={history}
      location={history.location}
      match={{ params: {}, isExact: false, path: '', url: '' }}
    />
  );

  expect(component).toMatchSnapshot();
});

/*it('renders a network if available', () => {
  const history = createMemoryHistory();

  const component = shallow(
    <Header
      isSearching={false}
      history={history}
      location={history.location}
      match={{ params: {}, isExact: false, path: '', url: '' }}
    />
  );

  expect(component.find(Network).prop('color')).toBe(NETWORK_MAINNET.color);
  expect(component.find(Network).contains('Mainnet')).toBe(true);
});*/

it('navigates to the home page on click', () => {
  const history = createMemoryHistory();
  const listener = jest.fn();
  history.listen(listener);

  const component = shallow(
    <Header
      isSearching={false}
      history={history}
      location={history.location}
      match={{ params: {}, isExact: false, path: '', url: '' }}
    />
  );

  component.find(Logo).simulate('click');

  expect(listener).toHaveBeenCalledTimes(1);
  expect(listener.mock.calls[0][0].pathname).toBe('/');
});

it('shows a modal before navigating if searching', () => {
  const history = createMemoryHistory();

  const component = shallow(
    <Header
      isSearching={true}
      history={history}
      location={history.location}
      match={{ params: {}, isExact: false, path: '', url: '' }}
    />
  );

  component.find(Logo).simulate('click');

  expect(component.find(Modal).prop('isVisible')).toBe(true);
});
