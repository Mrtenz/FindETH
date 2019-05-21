declare module 'favicons-webpack-plugin' {
  interface Options {
    logo?: string;
  }

  interface FaviconsWebpackPlugin {
    (options: string | Options): void;
  }

  export default FaviconsWebpackPlugin;
}
