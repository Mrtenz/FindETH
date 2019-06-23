import { WalletType } from './WalletType';

export interface AbstractWalletResult {
  type: WalletType;
  address: string;
  path: string;
}

export interface MnemonicPhraseResult extends AbstractWalletResult {
  type: WalletType.MnemonicPhrase;
  withPassword: boolean;
}

export interface HardwareWalletResult extends AbstractWalletResult {
  type: WalletType.Ledger | WalletType.Trezor;
}

export type WalletResult = MnemonicPhraseResult | HardwareWalletResult;
