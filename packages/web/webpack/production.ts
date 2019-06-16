import common from './common';
import { smart } from 'webpack-merge';
import { Configuration } from 'webpack';
import { join } from 'path';

const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const CspHtmlWebpackPlugin = require('csp-html-webpack-plugin');
const SitemapWebpackPlugin = require('sitemap-webpack-plugin').default;
const RobotsPlugin = require('robotstxt-webpack-plugin');

const SITEMAP_PATHS = ['/', '/start', '/flow/address', '/flow/ether', '/flow/token'];

const configuration: Configuration = {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    splitChunks: {
      chunks: 'initial'
    },
    sideEffects: true
  },
  plugins: [
    new FaviconsWebpackPlugin({
      logo: join(__dirname, '../src/assets/images/logos/findeth/findeth-white.png'),
      prefix: 'assets/icons-[hash]/',
      persistentCache: true,
      title: 'FindETH',
      icons: {
        favicons: false
      }
    }),
    new CspHtmlWebpackPlugin({
      'default-src': `'none'`,
      'script-src': `'self' https://analytics.mycryptoapi.com`,
      'style-src': `'unsafe-inline'`,
      'img-src': `'self' data: https://analytics.mycryptoapi.com`,
      'font-src': `'self'`,
      'connect-src': `https://api.mycryptoapi.com/eth https://mainnet.infura.io https://api.etherscan.io`,
      'frame-src': `'self' https://connect.trezor.io/`
    }),
    new SitemapWebpackPlugin('https://findeth.io', SITEMAP_PATHS),
    new RobotsPlugin({
      policy: [
        {
          userAgent: '*',
          allow: '/',
          disallow: '/search'
        }
      ],
      sitemap: 'https://findeth.io/sitemap.xml'
    })
  ]
};

export default smart(common, configuration);
