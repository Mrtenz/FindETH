import Transport from '@ledgerhq/hw-transport';
import TransportNodeHid from '@ledgerhq/hw-transport-node-hid-noevents';
import EthereumApp from '@ledgerhq/hw-app-eth';
import Ledger from './Ledger';
import { createTransportRecorder, RecordStore } from '@ledgerhq/hw-transport-mocker';

/**
 * Can in theory be used to unit test Ledger devices.
 */
export default class LedgerMock extends Ledger {
  public readonly store: RecordStore = new RecordStore();
  protected transport: Transport<any> | null = null;
  protected app: EthereumApp | null = null;

  protected async checkConnection(): Promise<void> {
    if (this.transport === null) {
      this.transport = await this.getTransport();
      this.app = new EthereumApp(this.transport);
    }
  }

  private async getTransport(): Promise<Transport<any>> {
    const DecoratedTransport = createTransportRecorder(TransportNodeHid, this.store);
    const recorder = await DecoratedTransport.open(undefined);

    recorder.on('disconnect', () => {
      this.transport = null;
    });

    return recorder;
  }
}
