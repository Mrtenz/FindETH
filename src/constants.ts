export interface DerivationPath {
  name: string;
  prefix: string;
}

export enum SearchType {
  Ether,
  Address
}

/**
 * All derivation paths used by MyCrypto.
 */
export const ALL_DERIVATION_PATHS: DerivationPath[] = [
  {
    name: 'Default (ETH)',
    prefix: "m/44'/60'/0'/0"
  },
  {
    name: 'Ledger (ETH)',
    prefix: "m/44'/60'/0'"
  },
  {
    name: 'Ledger (ETC)',
    prefix: "m/44'/60'/160720'/0'"
  },
  {
    name: 'Default (ETC)',
    prefix: "m/44'/61'/0'/0"
  },
  {
    name: 'Testnet (ETH)',
    prefix: "m/44'/1'/0'/0"
  },
  {
    name: 'Default (EXP)',
    prefix: "m/44'/40'/0'/0"
  },
  {
    name: 'Default (UBQ)',
    prefix: "m/44'/108'/0'/0"
  },
  {
    name: 'Default (TOMO)',
    prefix: "m/44'/889'/0'/0"
  },
  {
    name: 'Default (ELLA)',
    prefix: "m/44'/163'/0'/0"
  },
  {
    name: 'Default (MUSIC)',
    prefix: "m/44'/184'/0'/0"
  },
  {
    name: 'Default (ETSC)',
    prefix: "m/44'/1128'/0'/0"
  },
  {
    name: 'Default (EGEM)',
    prefix: "m/44'/1987'/0'/0"
  },
  {
    name: 'Default (CLO)',
    prefix: "m/44'/820'/0'/0"
  },
  {
    name: 'Default (SNGLS)',
    prefix: "m/0'/0'/0'"
  },
  {
    name: 'Testnet (RSK)',
    prefix: "m/44'/37310'/0'/0"
  },
  {
    name: 'Mainnet (RSK)',
    prefix: "m/44'/137'/0'/0"
  },
  {
    name: 'Default (GO)',
    prefix: "m/44'/6060'/0'/0"
  },
  {
    name: 'Default (EOSC)',
    prefix: "m/44'/2018'/0'/0"
  },
  {
    name: 'Default (ESN)',
    prefix: "m/44'/31102'/0'/0"
  },
  {
    name: 'Default (AKA)',
    prefix: "m/44'/200625'/0'/0"
  },
  {
    name: 'Default (PIRL)',
    prefix: "m/44'/164'/0'/0"
  },
  {
    name: 'Default (ATH)',
    prefix: "m/44'/1620'/0'/0"
  },
  {
    name: 'Default (ETHO)',
    prefix: "m/44'/1313114'/0'/0"
  },
  {
    name: 'Default (MIX)',
    prefix: "m/44'/76'/0'/0"
  },
  {
    name: 'Default (REOSC)',
    prefix: "m/44'/2894'/0'/0"
  },
  {
    name: 'Default (THUNDERCORE)',
    prefix: "m/44'/1001'/0'/0"
  },
  {
    name: 'Default (WEB)',
    prefix: "m/44'/227'/0'/0"
  },
  {
    name: 'Default (METADIUM)',
    prefix: "m/44'/916'/0'/0"
  },
  {
    name: 'Default (SOLIDUM)',
    prefix: "m/44'/997'/0'/0"
  },
  {
    name: 'Default (DEXON)',
    prefix: "m/44'/237'/0'/0"
  }
];

export const SMALL_DISPLAYS = 'screen and (max-width: 550px)';
