import React from 'react';
import { shallow } from 'enzyme';
import { StyledButton } from './StyledButton';

it('renders a snapshot', () => {
  const component = shallow(<StyledButton>Foo</StyledButton>);

  expect(component).toMatchSnapshot();
});

it('renders with text', () => {
  const component = shallow(<StyledButton>Foo</StyledButton>);

  expect(component.contains('Foo')).toBe(true);
});

it('calls the onClick function if clicked', () => {
  const handleClick = jest.fn();

  const component = shallow(<StyledButton onClick={handleClick} />);
  component.simulate('click');

  expect(handleClick).toHaveBeenCalledTimes(1);
});
