declare module 'jest-plugin-fs' {
  export * from 'fs';

  class JestPluginFs {
    public root: string;
    public mock(): void;
    public restore(): void;
  }

  export default new JestPluginFs();

  export const mock: typeof import('fs');
}
