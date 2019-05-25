declare module 'trezor-connect' {
  export function manifest(manifest: { email: string; appUrl: string }): void;

  interface Data<Payload> {
    id: number;
    payload: Payload;
    success: boolean;
  }

  interface GetPublicKeyPayload {
    chainCode: string;
    publicKey: string;
  }

  export function getPublicKey(params: {
    path: string | number[];
  }): Promise<Data<GetPublicKeyPayload>>;

  interface EthereumGetAddressPayload {
    address: string;
    path: number[];
    serializedPath: string;
  }

  export function ethereumGetAddress(params: {
    path: string | number[];
  }): Promise<Data<EthereumGetAddressPayload>>;
}
