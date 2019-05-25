interface RegularDerivationPath {
  name: string;
  prefix: string;
  isHardened: false;
}

interface HardenedDerivationPath {
  name: string;
  prefix: string;
  isHardened: true;

  /**
   * Get the full derivation path with the address index. This can be used with hardened derivation
   * paths.
   *
   * @return {string}
   */
  getIndex(addressIndex: number): string;
}

export type DerivationPath = RegularDerivationPath | HardenedDerivationPath;

export const DEFAULT_ETH: DerivationPath = {
  name: 'Default (ETH)',
  prefix: `m/44'/60'/0'/0`,
  isHardened: false
};

export const LEDGER_ETH: DerivationPath = {
  name: 'Ledger (ETH)',
  prefix: `m/44'/60'/0'`,
  isHardened: false
};

export const LEDGER_ETC: DerivationPath = {
  name: 'Ledger (ETC)',
  prefix: `m/44'/60'/160720'/0'`,
  isHardened: false
};

export const DEFAULT_ETC: DerivationPath = {
  name: 'Default (ETC)',
  prefix: `m/44'/61'/0'/0`,
  isHardened: false
};

export const TESTNET_ETH: DerivationPath = {
  name: 'Testnet (ETH)',
  prefix: `m/44'/1'/0'/0`,
  isHardened: false
};

export const DEFAULT_EXP: DerivationPath = {
  name: 'Default (EXP)',
  prefix: `m/44'/40'/0'/0`,
  isHardened: false
};

export const DEFAULT_UBQ: DerivationPath = {
  name: 'Default (UBQ)',
  prefix: `m/44'/108'/0'/0`,
  isHardened: false
};

export const DEFAULT_TOMO: DerivationPath = {
  name: 'Default (TOMO)',
  prefix: `m/44'/889'/0'/0`,
  isHardened: false
};

export const DEFAULT_ELLA: DerivationPath = {
  name: 'Default (ELLA)',
  prefix: `m/44'/163'/0'/0`,
  isHardened: false
};

export const DEFAULT_MUSIC: DerivationPath = {
  name: 'Default (MUSIC)',
  prefix: `m/44'/184'/0'/0`,
  isHardened: false
};

export const DEFAULT_ETSC: DerivationPath = {
  name: 'Default (ETSC)',
  prefix: `m/44'/1128'/0'/0`,
  isHardened: false
};

export const DEFAULT_EGEM: DerivationPath = {
  name: 'Default (EGEM)',
  prefix: `m/44'/1987'/0'/0`,
  isHardened: false
};

export const DEFAULT_CLO: DerivationPath = {
  name: 'Default (CLO)',
  prefix: `m/44'/820'/0'/0`,
  isHardened: false
};

export const DEFAULT_SNGLS: DerivationPath = {
  name: 'Default (SNGLS)',
  prefix: `m/0'/0'/0'`,
  isHardened: false
};

export const TESTNET_RSK: DerivationPath = {
  name: 'Testnet (RSK)',
  prefix: `m/44'/37310'/0'/0`,
  isHardened: false
};

export const MAINNET_RSK: DerivationPath = {
  name: 'Mainnet (RSK)',
  prefix: `m/44'/137'/0'/0`,
  isHardened: false
};

export const DEFAULT_GO: DerivationPath = {
  name: 'Default (GO)',
  prefix: `m/44'/6060'/0'/0`,
  isHardened: false
};

export const DEFAULT_EOSC: DerivationPath = {
  name: 'Default (EOSC)',
  prefix: `m/44'/2018'/0'/0`,
  isHardened: false
};

export const DEFAULT_ESN: DerivationPath = {
  name: 'Default (ESN)',
  prefix: `m/44'/31102'/0'/0`,
  isHardened: false
};

export const DEFAULT_AKA: DerivationPath = {
  name: 'Default (AKA)',
  prefix: `m/44'/200625'/0'/0`,
  isHardened: false
};

export const DEFAULT_PIRL: DerivationPath = {
  name: 'Default (PIRL)',
  prefix: `m/44'/164'/0'/0`,
  isHardened: false
};

export const DEFAULT_ATH: DerivationPath = {
  name: 'Default (ATH)',
  prefix: `m/44'/1620'/0'/0`,
  isHardened: false
};

export const DEFAULT_ETHO: DerivationPath = {
  name: 'Default (ETHO)',
  prefix: `m/44'/1313114'/0'/0`,
  isHardened: false
};

export const DEFAULT_MIX: DerivationPath = {
  name: 'Default (MIX)',
  prefix: `m/44'/76'/0'/0`,
  isHardened: false
};

export const DEFAULT_REOSC: DerivationPath = {
  name: 'Default (REOSC)',
  prefix: `m/44'/2894'/0'/0`,
  isHardened: false
};

export const DEFAULT_THUNDERCORE: DerivationPath = {
  name: 'Default (THUNDERCORE)',
  prefix: `m/44'/1001'/0'/0`,
  isHardened: false
};

export const DEFAULT_WEB: DerivationPath = {
  name: 'Default (WEB)',
  prefix: `m/44'/227'/0'/0`,
  isHardened: false
};

export const DEFAULT_METADIUM: DerivationPath = {
  name: 'Default (METADIUM)',
  prefix: `m/44'/916'/0'/0`,
  isHardened: false
};

export const DEFAULT_SOLIDUM: DerivationPath = {
  name: 'Default (SOLIDUM)',
  prefix: `m/44'/997'/0'/0`,
  isHardened: false
};

export const DEFAULT_DEXON: DerivationPath = {
  name: 'Default (DEXON)',
  prefix: `m/44'/237'/0'/0`,
  isHardened: false
};

export const LEDGER_LIVE_ETH: DerivationPath = {
  name: 'Ledger Live (ETH)',
  prefix: `m/44'/60'/0'/0/0`,
  isHardened: true,
  getIndex: (addressIndex): string => `m/44'/60'/${addressIndex}'/0/0`
};

/**
 * All available derivation paths.
 */
export const ALL_DERIVATION_PATHS: DerivationPath[] = [
  DEFAULT_ETH,
  LEDGER_ETH,
  LEDGER_ETC,
  DEFAULT_ETC,
  TESTNET_ETH,
  DEFAULT_EXP,
  DEFAULT_UBQ,
  DEFAULT_TOMO,
  DEFAULT_ELLA,
  DEFAULT_MUSIC,
  DEFAULT_ETSC,
  DEFAULT_EGEM,
  DEFAULT_CLO,
  DEFAULT_SNGLS,
  TESTNET_RSK,
  MAINNET_RSK,
  DEFAULT_GO,
  DEFAULT_EOSC,
  DEFAULT_ESN,
  DEFAULT_AKA,
  DEFAULT_PIRL,
  DEFAULT_ATH,
  DEFAULT_ETHO,
  DEFAULT_MIX,
  DEFAULT_REOSC,
  DEFAULT_THUNDERCORE,
  DEFAULT_WEB,
  DEFAULT_METADIUM,
  DEFAULT_SOLIDUM,
  DEFAULT_DEXON,
  LEDGER_LIVE_ETH
];

/**
 * Due to limitations in the Ledger ETH application, only derivation paths starting with
 * `m/44'/60'` and `m/44'/1'` can be checked.
 */
export const LEDGER_DERIVATION_PATHS: DerivationPath[] = [
  DEFAULT_ETH,
  LEDGER_ETH,
  LEDGER_ETC,
  TESTNET_ETH,
  LEDGER_LIVE_ETH
];

/**
 * While Trezor does support hardened paths, it'd be very tedious for the user to check all the
 * paths currently, since the user would have to confirm each address individually.
 */
export const TREZOR_DERIVATION_PATHS: DerivationPath[] = [
  ...ALL_DERIVATION_PATHS.filter(path => !path.isHardened)
];
