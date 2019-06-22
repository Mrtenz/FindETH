import React from 'react';
import { mount, shallow } from 'enzyme';
import Section from './Section';
import { lightTheme } from '../../../styles';
import { DEFAULT_PADDING, getPadding } from './StyledSection';

it('renders a snapshot', () => {
  const component = shallow(<Section>Foo</Section>);

  expect(component).toMatchSnapshot();
});

it('renders with text', () => {
  const component = shallow(<Section>Foo</Section>);

  expect(component.contains('Foo')).toBe(true);
});

it('changes the styles based on the props', () => {
  const component = mount(
    <Section theme={lightTheme} dark={true}>
      Foo
    </Section>
  );
  expect(component).toHaveStyleRule('background', lightTheme.darkBackground);
  expect(component).toHaveStyleRule('flex-grow', 'unset');
  expect(component).toHaveStyleRule('padding', `${DEFAULT_PADDING} 0 ${DEFAULT_PADDING} 0`);
  expect(component).toHaveStyleRule('border-top', 'none');

  component.setProps({ dark: false, secondary: true });
  expect(component).toHaveStyleRule('background', lightTheme.secondarySectionBackground);

  component.setProps({ secondary: false });
  expect(component).toHaveStyleRule('background', lightTheme.primarySectionBackground);

  component.setProps({ grow: true, border: true });
  expect(component).toHaveStyleRule('flex-grow', '1');
  expect(component).toHaveStyleRule('border-top', `1px solid ${lightTheme.line}`);
});

it('changes padding based on the props', () => {
  expect(getPadding(true, true)).toBe(`${DEFAULT_PADDING} 0 ${DEFAULT_PADDING} 0`);
  expect(getPadding('1rem', '2rem')).toBe(`1rem 0 2rem 0`);
});
