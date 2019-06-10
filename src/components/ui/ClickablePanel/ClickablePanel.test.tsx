import React, { FunctionComponent } from 'react';
import { shallow } from 'enzyme';
import { ClickablePanel } from './ClickablePanel';
import { createMemoryHistory } from 'history';
import Panel from '../Panel';

const Icon: FunctionComponent = () => null;

it('renders a snapshot', () => {
  const history = createMemoryHistory();
  const component = shallow(
    <ClickablePanel
      title="Foo"
      icon={Icon}
      to="/baz"
      history={history}
      location={history.location}
      match={{ params: {}, isExact: false, path: '', url: '' }}
    />
  );

  expect(component).toMatchSnapshot();
});

it('renders the children', () => {
  const handleClick = jest.fn();

  const history = createMemoryHistory();
  const component = shallow(
    <ClickablePanel
      title="Foo"
      icon={Icon}
      to="/baz"
      history={history}
      location={history.location}
      match={{ params: {}, isExact: false, path: '', url: '' }}
      onClick={handleClick}
    />
  );

  expect(component.contains('Foo')).toBe(true);
});

it(`doesn't navigate on click with a onClick handler provided`, () => {
  const handleClick = jest.fn();

  const history = createMemoryHistory();
  const component = shallow(
    <ClickablePanel
      title="Foo"
      icon={Icon}
      to="/baz"
      history={history}
      location={history.location}
      match={{ params: {}, isExact: false, path: '', url: '' }}
      onClick={handleClick}
    />
  );

  const listener = jest.fn();
  history.listen(listener);

  component.find(Panel).simulate('click');

  expect(handleClick).toHaveBeenCalledTimes(1);
  expect(listener).not.toHaveBeenCalled();
});

it('navigates on click without a onClick handler provided', () => {
  const history = createMemoryHistory();
  const component = shallow(
    <ClickablePanel
      title="Foo"
      icon={Icon}
      to="/baz"
      history={history}
      location={history.location}
      match={{ params: {}, isExact: false, path: '', url: '' }}
    />
  );

  const listener = jest.fn();
  history.listen(listener);

  component.find(Panel).simulate('click');

  expect(listener).toHaveBeenCalledTimes(1);
  expect(listener.mock.calls[0][0].pathname).toBe('/baz');
});
