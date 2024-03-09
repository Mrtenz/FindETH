import { join, resolve } from 'path';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { Configuration, EnvironmentPlugin, ProvidePlugin } from 'webpack';

const configuration: Configuration = {
  entry: resolve(__dirname, '../src/index.tsx'),
  output: {
    path: resolve(__dirname, '../dist'),
    filename: '[name].[chunkhash].js',
    globalObject: 'this',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
      'styled-components': join(__dirname, '../node_modules/styled-components')
    },
    fallback: {
      assert: require.resolve('assert/'),
      buffer: require.resolve('buffer/'),
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify'),
      vm: false
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        },
        exclude: /node_modules/,
        include: [join(__dirname, '../src')]
      },
      {
        test: /\.(png|svg|jpe?g)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/images/[name].[ext]'
        }
      },
      {
        test: /\.(woff2?|ttf|eot)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/fonts/[name].[ext]'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, '../src/index.html')
    }),
    new EnvironmentPlugin({
      NODE_ENV: 'development',
      IS_LOCAL: false
    }),
    new ProvidePlugin({
      Buffer: ['buffer/', 'Buffer'],
      process: 'process/browser'
    })
  ]
};

export default configuration;
