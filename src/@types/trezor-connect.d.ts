declare module 'trezor-connect' {
  export function manifest(manifest: { email: string; appUrl: string }): void;

  interface Data {
    id: number;
    payload: {
      address: string;
    };
    success: boolean;
  }

  export function ethereumGetAddress(params: { path: string | number[] }): Promise<Data>;
}
