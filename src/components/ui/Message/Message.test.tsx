import React from 'react';
import { mount, shallow } from 'enzyme';
import Message from './Message';
import { lightTheme, ThemeProvider } from '../../../styles';

it('renders a snapshot', () => {
  const component = shallow(<Message type="info">Foo</Message>);

  expect(component).toMatchSnapshot();
});

it('renders the children', () => {
  const component = shallow(<Message type="info">Foo</Message>);

  expect(component.contains('Foo')).toBe(true);
});

it('changes the color based on the type', () => {
  const infoComponent = mount(
    <ThemeProvider theme={lightTheme}>
      <Message type="info">Foo</Message>
    </ThemeProvider>
  );
  expect(infoComponent).toHaveStyleRule('background', lightTheme.infoMessageBackground);

  const warningComponent = mount(
    <ThemeProvider theme={lightTheme}>
      <Message type="warning">Foo</Message>
    </ThemeProvider>
  );
  expect(warningComponent).toHaveStyleRule('background', lightTheme.warningMessageBackground);

  const errorComponent = mount(
    <ThemeProvider theme={lightTheme}>
      <Message type="error">Foo</Message>
    </ThemeProvider>
  );
  expect(errorComponent).toHaveStyleRule('background', lightTheme.errorMessageBackground);
});
