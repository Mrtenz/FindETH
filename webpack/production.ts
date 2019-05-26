import common from './common';
import { smart } from 'webpack-merge';
import { Configuration } from 'webpack';
import { join } from 'path';

const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const CspHtmlWebpackPlugin = require('csp-html-webpack-plugin');
const CnameWebpackPlugin = require('cname-webpack-plugin');

const configuration: Configuration = {
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'initial'
    },
    sideEffects: true
  },
  plugins: [
    new FaviconsWebpackPlugin(join(__dirname, '../src/assets/images/logos/ethereum.svg')),
    new CspHtmlWebpackPlugin({
      'default-src': `'none'`,
      'script-src': `'self' https://analytics.mycryptoapi.com`,
      'style-src': `'unsafe-inline'`,
      'img-src': `'self' data: https://analytics.mycryptoapi.com`,
      'font-src': `'self'`,
      'connect-src': `https://api.mycryptoapi.com/eth`
    }),
    new CnameWebpackPlugin({
      domain: 'findeth.io'
    })
  ]
};

export default smart(common, configuration);
