import React from 'react';
import { mount, shallow } from 'enzyme';
import Question from './Question';
import Heading from '../../../ui/Heading';
import Typography from '../../../ui/Typography';

describe('Question', () => {
  it('renders a snapshot', () => {
    const component = shallow(<Question question="Foo">Bar</Question>);
    expect(component).toMatchSnapshot();
  });

  it('displays the question and children', () => {
    const component = mount(<Question question="Foo">Bar</Question>);
    expect(component.find(Heading).contains('Foo')).toBe(true);
    expect(component.find(Typography).contains('Bar')).toBe(true);

    component.setProps({ question: 'Baz' });
    expect(component.find(Heading).contains('Baz')).toBe(true);
    expect(component.find(Typography).contains('Bar')).toBe(true);
  });
});
