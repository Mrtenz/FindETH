import { Observer } from 'rxjs';
import TransportWebBLE from '@ledgerhq/hw-transport-web-ble';
import EthereumApp from '@ledgerhq/hw-app-eth';

export const createApp = async (): Promise<EthereumApp> => {
  const device = await findDevice();
  const transport = await TransportWebBLE.open(device);

  return new EthereumApp(transport);
};

export const findDevice = (): Promise<BluetoothDevice> => {
  return new Promise((resolve, reject) => {
    const observer: Observer<{ type: string; descriptor: BluetoothDevice }> = {
      next: ({ descriptor }) => resolve(descriptor),
      error: event => reject(event),
      complete: () => {
        /* noop */
      }
    };

    TransportWebBLE.listen(observer);
  });
};
