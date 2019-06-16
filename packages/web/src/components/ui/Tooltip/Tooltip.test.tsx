import React from 'react';
import { mount, shallow } from 'enzyme';
import Tooltip from './Tooltip';
import { StyledTooltip, TooltipContainer } from './StyledTooltip';
import { css } from 'styled-components';

it('renders a snapshot', () => {
  const component = shallow(<Tooltip content="Foo">Bar</Tooltip>);

  expect(component).toMatchSnapshot();
});

it('renders the content and the children', () => {
  const component = shallow(<Tooltip content="Foo">Bar</Tooltip>);

  expect(component.contains('Foo')).toBe(true);
  expect(component.contains('Bar')).toBe(true);
});

it('renders the actual tooltip on hover', () => {
  const component = mount(<Tooltip content="Foo">Bar</Tooltip>);

  expect(component.find(StyledTooltip)).toHaveStyleRule('opacity', '0');
  expect(component.find(TooltipContainer)).toHaveStyleRule('opacity', '1', {
    // prettier-ignore
    modifier: css`
      &:hover ${StyledTooltip}
    `
  });
});
