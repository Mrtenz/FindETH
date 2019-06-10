import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

it('renders a snapshot', () => {
  const component = shallow(<Button>Foo</Button>);

  expect(component).toMatchSnapshot();
});

it('renders with text', () => {
  const component = shallow(<Button>Foo</Button>);

  expect(component.contains('Foo')).toBe(true);
});

it('calls the onClick function if clicked', () => {
  const handleClick = jest.fn();

  const component = shallow(<Button onClick={handleClick} />);
  component.simulate('click');

  expect(handleClick).toHaveBeenCalledTimes(1);
});
