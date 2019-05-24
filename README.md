# FindETH

[![Build Status](https://travis-ci.com/Mrtenz/FindETH.svg?branch=master)](https://travis-ci.com/Mrtenz/FindETH)

A tool to help you find your Ether or Ethereum address, by scanning a bunch of derivation paths. It currently supports Ledger and Trezor devices and mnemonic phrases. It has experimental support for Ledger devices over Bluetooth.

<https://findeth.io>

## Development

This tool is built on top of React and Redux, and uses tools like `yarn` and `webpack` to bundle everything. Install the dependencies with `yarn` as follows:

```
yarn
```

### Run a local server

To run a local development server, use:

```
yarn run start
```

Head to <https://localhost:8080> in your browser to see the application.

### Bundle the files

Use the following command to bundle everything

```
yarn run build
```
