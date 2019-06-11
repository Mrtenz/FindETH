import React from 'react';
import { mount, shallow } from 'enzyme';
import Stepper from './Stepper';
import { Step, StyledStepper } from './StyledStepper';

describe('Stepper', () => {
  it('renders a snapshot', () => {
    const component = shallow(<Stepper current={1} total={3} />);

    expect(component).toMatchSnapshot();
  });

  it('changes the active step based on the props', () => {
    const component = mount(<Stepper current={1} total={3} />);

    expect(component.find(Step).length).toBe(2);
    expect(component.find(StyledStepper).length).toBe(1);
    expect(component.find(StyledStepper).key()).toBe('1');

    component.setProps({ current: 2 });
    expect(component.find(StyledStepper).key()).toBe('2');
  });
});
