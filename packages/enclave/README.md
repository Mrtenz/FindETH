# @findeth/enclave

This package is used for (safe) communication between the front-end and Electron, without enabling `nodeIntegration` or disabling `contextIsolation` in the Electron webview. This means standard IPC communication and Node.js libraries cannot be used directly in the webview.

This implementation is based on [the implementation by MyCrypto](https://github.com/MyCryptoHQ/MyCrypto/tree/develop/shared/enclave), which you can read more about [here](https://gist.github.com/wbobeirne/ec3e52b3db1359278c19f29e1bbfd5f1).
