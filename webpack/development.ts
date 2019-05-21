import common from './common';
import { smart } from 'webpack-merge';
import { Configuration } from 'webpack';

const configuration: Configuration = {
  mode: 'development',
  devServer: {
    https: true,
    hot: true
  }
} as any;

export default smart(common, configuration);
