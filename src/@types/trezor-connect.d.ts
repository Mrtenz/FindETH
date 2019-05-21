declare module 'trezor-connect' {
  export function manifest(manifest: { email: string; appUrl: string }): void;

  interface Data {
    id: number;
    payload: {
      chainCode: string;
      publicKey: string;
    };
    success: boolean;
  }

  export function getPublicKey(params: { path: string | number[] }): Promise<Data>;
}
