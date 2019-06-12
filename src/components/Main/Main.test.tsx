import React from 'react';
import { mount, shallow } from 'enzyme';

beforeEach(() => {
  jest.doMock('@ethersproject/providers', () => ({
    FallbackProvider: jest.fn().mockImplementation(() => ({ type: 'FALLBACK_PROVIDER' })),
    Web3Provider: jest.fn().mockImplementation((currentProvider: any) => ({
      type: 'WEB3_PROVIDER',
      currentProvider
    })),
    EtherscanProvider: jest.fn(),
    InfuraProvider: jest.fn(),
    JsonRpcProvider: jest.fn()
  }));
});

afterEach(() => {
  jest.dontMock('@ethersproject/providers');
});

describe('Main', () => {
  it('renders a snapshot', async () => {
    const { Main } = await import('./Main');
    const component = shallow(<Main handleConnect={jest.fn()} handleOffline={jest.fn()} />);
    expect(component).toMatchSnapshot();
  });

  it('runs the handleOffline callback when offline', async () => {
    const { Main } = await import('./Main');
    const handleOffline = jest.fn();
    mount(<Main handleConnect={jest.fn()} handleOffline={handleOffline} />);

    window.dispatchEvent(new Event('offline'));
    expect(handleOffline).toHaveBeenCalledTimes(1);
  });

  it('calls handleConnect with an instance of a provider', async () => {
    const { Main } = await import('./Main');
    const handleConnect = jest.fn();
    const handleOffline = jest.fn();
    mount(<Main handleConnect={handleConnect} handleOffline={handleOffline} />);

    expect(handleOffline).not.toHaveBeenCalled();
    expect(handleConnect).toHaveBeenCalledTimes(1);
    expect(handleConnect).toHaveBeenCalledWith({ type: 'FALLBACK_PROVIDER' });
  });

  it('calls handleConnect with an instance of the web3 provider', async () => {
    const { Main } = await import('./Main');
    (window as any).web3 = { currentProvider: 'foo' };

    const handleConnect = jest.fn();
    const handleOffline = jest.fn();
    mount(<Main handleConnect={handleConnect} handleOffline={handleOffline} />);

    expect(handleOffline).not.toHaveBeenCalled();
    expect(handleConnect).toHaveBeenCalledTimes(1);
    expect(handleConnect).toHaveBeenCalledWith({ type: 'WEB3_PROVIDER', currentProvider: 'foo' });
  });
});
