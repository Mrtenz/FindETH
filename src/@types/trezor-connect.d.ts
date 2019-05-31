declare module 'trezor-connect' {
  export function manifest(manifest: { email: string; appUrl: string }): void;

  interface Data<Payload> {
    id: number;
    payload: Payload;
    success: boolean;
  }

  interface GetPublicKeyPayload {
    serializedPath: string;
    chainCode: string;
    publicKey: string;
  }

  interface Path {
    path: string | number[];
  }

  export function getPublicKey(params: Path): Promise<Data<GetPublicKeyPayload>>;
  export function getPublicKey(params: { bundle: Path[] }): Promise<Data<GetPublicKeyPayload[]>>;

  interface EthereumGetAddressPayload {
    address: string;
    path: number[];
    serializedPath: string;
  }

  export function ethereumGetAddress(params: {
    path: string | number[];
  }): Promise<Data<EthereumGetAddressPayload>>;
}
