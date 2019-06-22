import production from './production';
import { smart } from 'webpack-merge';
import { Configuration } from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

const configuration: Configuration = {
  plugins: [new BundleAnalyzerPlugin()]
};

export default smart(production, configuration);
