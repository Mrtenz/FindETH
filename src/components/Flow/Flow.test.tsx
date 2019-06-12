import React, { FunctionComponent } from 'react';
import { mount } from 'enzyme';
import useFlow, { FlowProps } from './Flow';
import Heading from '../ui/Heading';
import { act } from 'react-dom/test-utils';
import { FlowHeader } from './StyledFlow';

const HookWrapper: FunctionComponent<{ hook: ReturnType<typeof useFlow> }> = () => <div />;

const Wrapper: FunctionComponent = () => {
  const hook = useFlow();

  return <HookWrapper hook={hook} />;
};

const TestComponent: FunctionComponent<FlowProps & { foo?: any }> = () => null;

describe('Flow', () => {
  it('renders a snapshot', () => {
    const wrapper = mount(<Wrapper />);
    const [, Flow] = wrapper.find(HookWrapper).prop('hook');

    const components = [
      {
        title: 'Foo',
        Component: TestComponent
      }
    ];

    const component = mount(<Flow components={components} injectedProps={{}} onDone={jest.fn()} />);
    expect(component).toMatchSnapshot();

    component.setProps({ page: false });
    expect(component).toMatchSnapshot();
  });

  it('goes through all the components and runs the onDone callback after', () => {
    const wrapper = mount(<Wrapper />);
    const [, Flow] = wrapper.find(HookWrapper).prop('hook');

    const components = [
      {
        title: 'Foo',
        Component: TestComponent
      }
    ];

    const onDone = jest.fn();
    const component = mount(<Flow components={components} injectedProps={{}} onDone={onDone} />);

    expect(component.find(TestComponent).length).toBe(1);
    expect(component.find(Heading).contains('Foo')).toBe(true);

    const onNext = component.find(TestComponent).prop('onNext');
    act(() => onNext());

    expect(onDone).toBeCalledTimes(1);
  });

  it('resets the state', () => {
    const wrapper = mount(<Wrapper />);
    const [reset, Flow] = wrapper.find(HookWrapper).prop('hook');

    const components = [
      {
        title: 'Foo',
        Component: TestComponent
      }
    ];

    const onDone = jest.fn();
    const component = mount(<Flow components={components} injectedProps={{}} onDone={onDone} />);

    const onNext = component.find(TestComponent).prop('onNext');
    act(() => onNext({ foo: 'bar' }));
    act(() => reset());
    act(() => onNext());

    expect(onDone).toBeCalledTimes(2);
    expect(onDone).toHaveBeenNthCalledWith(2, {});
  });

  it('stores any items passed to onNext', () => {
    const wrapper = mount(<Wrapper />);
    const [, Flow] = wrapper.find(HookWrapper).prop('hook');

    const components = [
      {
        title: 'Foo',
        Component: TestComponent
      }
    ];

    const onDone = jest.fn();
    const component = mount(<Flow components={components} injectedProps={{}} onDone={onDone} />);

    const onNext = component.find(TestComponent).prop('onNext');
    act(() => onNext({ foo: 'bar' }));

    expect(onDone).toHaveBeenCalledTimes(1);
    expect(onDone).toHaveBeenCalledWith({ foo: 'bar' });
  });

  it('injects props to the specified component', () => {
    const wrapper = mount(<Wrapper />);
    const [, Flow] = wrapper.find(HookWrapper).prop('hook');

    const components = [
      {
        title: 'Foo',
        Component: TestComponent
      }
    ];

    const onDone = jest.fn();
    const component = mount(
      <Flow
        components={components}
        injectedProps={{ foo: 'bar' }}
        onDone={onDone}
        smallHeading={true}
      />
    );

    expect(component.find(TestComponent).prop('foo')).toBe('bar');
  });

  it('has a smaller margin when smallHeading is set', () => {
    const wrapper = mount(<Wrapper />);
    const [, Flow] = wrapper.find(HookWrapper).prop('hook');

    const components = [
      {
        title: 'Foo',
        Component: TestComponent
      }
    ];

    const onDone = jest.fn();
    const component = mount(
      <Flow components={components} injectedProps={{}} onDone={onDone} smallHeading={true} />
    );

    expect(component.find(FlowHeader)).toHaveStyleRule('margin-bottom', '1.494rem');
  });

  it('does not render anything when there are no more components specified', () => {
    const wrapper = mount(<Wrapper />);
    const [, Flow] = wrapper.find(HookWrapper).prop('hook');

    const onDone = jest.fn();
    const component = mount(
      <Flow components={[]} injectedProps={{}} onDone={onDone} smallHeading={true} />
    );

    expect(component.children().length).toBe(0);
  });
});
