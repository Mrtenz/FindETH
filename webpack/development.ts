import common from './common';
import { smart } from 'webpack-merge';
import { Configuration } from 'webpack';
import ForkCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

const configuration: Configuration = {
  mode: 'development',
  devServer: {
    https: true,
    hot: true
  },
  plugins: [new ForkCheckerWebpackPlugin()]
} as any;

export default smart(common, configuration);
