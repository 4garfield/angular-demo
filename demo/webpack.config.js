/**
 * Created by garfield on 2017/5/23.
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtPlugin = require('script-ext-html-webpack-plugin');

function root(dir) {
  return path.resolve(__dirname, '.', dir);
}

const clientConfig = {
  devtool: 'source-map',
  target: 'web',
  entry: root('./src/main.ts'),
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    path: root('./dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      { test: /\.ts$/,   loaders: ['awesome-typescript-loader', 'angular2-template-loader'] },
      { test: /\.css$/,  loader: 'raw-loader' },
      { test: /\.html$/, loader: 'raw-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: root('./src/index.html'),
      output: root('./dist'),
      inject: 'head'
    }),
    new ScriptExtPlugin({
      defaultAttribute: 'defer'
    })
  ]
};

module.exports = function (options) {
  options = options || {};

  return clientConfig;
};
