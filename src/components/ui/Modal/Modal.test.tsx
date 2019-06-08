import React from 'react';
import { mount, shallow } from 'enzyme';
import Modal from './Modal';
import { StyledModalOverlay } from './StyledModal';
import Button from '../Button';

it('renders a snapshot', () => {
  const component = shallow(<Modal isVisible={true}>Foo</Modal>);

  expect(component).toMatchSnapshot();
});

it('renders the children', () => {
  const component = shallow(<Modal isVisible={true}>Foo</Modal>);

  expect(component.contains('Foo')).toBe(true);
});

it(`doesn't render when not visible`, () => {
  const component = mount(<Modal isVisible={false}>Foo</Modal>);

  expect(component.find(StyledModalOverlay)).toHaveStyleRule('display', 'none');
});

it('renders buttons based on the props', () => {
  const handleClose = jest.fn();
  const component = mount(
    <Modal isVisible={true} onClose={handleClose}>
      Foo
    </Modal>
  );

  expect(component.find(Button).length).toBe(1);

  component.find(Button).simulate('click');
  expect(handleClose).toHaveBeenCalledTimes(1);

  const handleConfirm = jest.fn();
  component.setProps({ onConfirm: handleConfirm });

  expect(component.find(Button).length).toBe(2);

  component
    .find(Button)
    .at(0)
    .simulate('click');
  expect(handleConfirm).toHaveBeenCalledTimes(1);
});
