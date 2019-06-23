import React from 'react';
import { shallow } from 'enzyme';
import Loader from './Loader';
import Spinner from './Spinner';

it('renders a snapshot', () => {
  const component = shallow(<Loader isVisible={true}>Foo</Loader>);

  expect(component).toMatchSnapshot();
});

it('renders the children', () => {
  const component = shallow(<Loader isVisible={true}>Foo</Loader>);

  expect(component.contains('Foo')).toBe(true);
});

it(`doesn't render the spinner overlay when not visible`, () => {
  const component = shallow(<Loader isVisible={false} />);

  expect(component.exists(Spinner)).toBeFalsy();
});
