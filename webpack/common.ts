import { join, resolve } from 'path';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { Configuration, EnvironmentPlugin } from 'webpack';

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
        loader: 'style-loader!css-loader'
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
    })
  ]
};

export default configuration;
