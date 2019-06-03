declare namespace jest {
  interface AsymmetricMatcher {
    $$typeof: symbol;
    sample?: string | RegExp | object | any[] | (() => any);
  }

  type Value = string | number | RegExp | AsymmetricMatcher | undefined;

  interface Options {
    media?: string;
    modifier?: any;
    supports?: string;
  }

  interface Matchers<R> {
    toHaveStyleRule(property: string, value?: Value, options?: Options): R;
  }
}
