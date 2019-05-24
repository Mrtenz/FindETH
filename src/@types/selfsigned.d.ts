declare module 'selfsigned' {
  interface Certificates {
    private: string;
    public: string;
    cert: string;
    clientprivate?: string;
    clientpublic?: string;
    clientcert?: string;
  }

  type Callback = (error: any, pems: Certificates) => void;

  interface Attribute {
    name:
      | 'commonName'
      | 'countryName'
      | 'localityName'
      | 'stateOrProvinceName'
      | 'organizationName'
      | 'organizationalUnitName'
      | 'emailAddress';
    value: string;
  }

  interface Extension {
    name: string;
    [key: string]: any;
  }

  interface Options {
    keySize?: number;
    days?: number;
    algorithm?: 'sha1' | 'sha256';
    extensions?: Extension[];
    pkcs7?: boolean;
    clientCertificate?: boolean;
    clientCertificateCN?: string;
  }

  export function generate(done?: Callback);
  export function generate(attributes: Attribute[], done?: Callback);
  export function generate(attributes: Attribute[], options: Options, done?: Callback);
}
