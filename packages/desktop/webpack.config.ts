import merge from 'webpack-merge';
import common from '@findeth/common/webpack/common';
import production from '@findeth/common/webpack/production';
import { EnvironmentPlugin } from 'webpack';
import { resolve } from 'path';

const {
  output: { publicPath, ...output },
  ...config
} = production as any;

const renderer = merge.smart(
  config,
  { output },
  {
    target: 'electron-renderer',
    output: {
      path: resolve(__dirname, 'dist')
    },
    plugins: [
      new EnvironmentPlugin({
        IS_LOCAL: true,
        IS_ELECTRON: true
      })
    ]
  }
);

const main = merge.smart(common, {
  mode: 'development',
  target: 'electron-main',
  entry: resolve(__dirname, 'src/index.ts'),
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: undefined
  },
  node: {
    __dirname: false,
    __filename: false
  }
});

export default [renderer, main];
