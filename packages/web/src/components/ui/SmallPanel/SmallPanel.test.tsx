import React from 'react';
import { shallow } from 'enzyme';
import SmallPanel from './SmallPanel';

it('renders a snapshot', () => {
  const component = shallow(<SmallPanel>Foo</SmallPanel>);

  expect(component).toMatchSnapshot();
});
