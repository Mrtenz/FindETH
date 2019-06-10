import React from 'react';
import { shallow } from 'enzyme';
import Table from './Table';

it('renders a snapshot', () => {
  const component = shallow(<Table head={['Foo', 'Bar']} body={[[1, 2], [3, 4]]} />);

  expect(component).toMatchSnapshot();
});
