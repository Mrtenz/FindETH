import common from './common';
import { smart } from 'webpack-merge';
import { Configuration } from 'webpack';
import ForkCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

const configuration: Configuration = {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    https: true,
    hot: true,
    port: 8000
  },
  plugins: [new ForkCheckerWebpackPlugin()]
} as any;

export default smart(common, configuration);
