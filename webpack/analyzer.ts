import production from './production';
import merge from 'webpack-merge';
import { Configuration } from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

const configuration: Configuration = {
  plugins: [new BundleAnalyzerPlugin()]
};

export default merge(production, configuration);
