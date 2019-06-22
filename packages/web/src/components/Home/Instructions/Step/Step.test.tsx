import React from 'react';
import { mount, shallow } from 'enzyme';
import Step from './Step';
import Heading from '../../../ui/Heading';
import Typography from '../../../ui/Typography';

describe('Instructions', () => {
  it('renders a snapshot', () => {
    const component = shallow(<Step step={1}>Foo</Step>);
    expect(component).toMatchSnapshot();
  });

  it('displays the step number and children', () => {
    const component = mount(<Step step={1}>Foo</Step>);
    expect(component.find(Heading).contains('1')).toBe(true);
    expect(component.find(Typography).contains('Foo')).toBe(true);

    component.setProps({ step: 2 });
    expect(component.find(Heading).contains('2')).toBe(true);
    expect(component.find(Typography).contains('Foo')).toBe(true);
  });
});
