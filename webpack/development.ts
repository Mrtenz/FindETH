import common from './common';
import merge from 'webpack-merge';
import { Configuration } from 'webpack';

const configuration: Configuration = {
  mode: 'development',
  devtool: 'eval-source-map',
  output: {
    filename: '[name].[fullhash].js'
  },
  devServer: {
    hot: true,
    port: 8000,
    historyApiFallback: true
  }
  // plugins: [new ForkCheckerWebpackPlugin()]
} as any;

export default merge(common, configuration);
