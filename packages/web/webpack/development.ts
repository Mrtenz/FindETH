import common from './common';
import { smart } from 'webpack-merge';
import { Configuration } from 'webpack';
import ForkCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HardSourceWebpackPlugin from 'hard-source-webpack-plugin';

const configuration: Configuration = {
  mode: 'development',
  devtool: 'eval-source-map',
  output: {
    filename: '[name].[hash].js'
  },
  devServer: {
    https: true,
    hot: true,
    port: 8000,
    historyApiFallback: true
  },
  plugins: [new ForkCheckerWebpackPlugin(), new HardSourceWebpackPlugin()]
} as any;

export default smart(common, configuration);
