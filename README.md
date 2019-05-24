# FindETH

[![Build Status](https://travis-ci.com/Mrtenz/FindETH.svg?branch=master)](https://travis-ci.com/Mrtenz/FindETH)

A tool to help you find your Ether or Ethereum address, by scanning a bunch of derivation paths. It currently supports Ledger and Trezor devices and mnemonic phrases. It has experimental support for Ledger devices over Bluetooth.

<https://findeth.io>

## Running locally

If you want to use this tool with your mnemonic phrase, it's recommended to run it locally. The requirements for this are:

* [Node.js 10 or newer](https://nodejs.org/)
* [Yarn](https://yarnpkg.com/)

Clone this repository with Git or download the ZIP file and extract it. In the project folder, run the following command to install the dependencies.

```
yarn
```

Now you can run

```
yarn run serve
```

to start the local production server. You can access it by navigating to <https://localhost:8000> in your browser. You will get an SSL warning because it's using a self-signed certificate, but it's safe to ignore this.

## Development

This tool is built on top of React and Redux, and uses tools like `yarn` and `webpack` to bundle everything. Install the dependencies with `yarn` as follows:

```
yarn
```

### Run a local development server

To run a local development server, use:

```
yarn run start
```

Head to <https://localhost:8000> in your browser to see the application.

### Bundle the files

Use the following command to bundle everything

```
yarn run build
```
