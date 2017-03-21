const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const config = require('../../config/config');

const pathsUtils = config.utils_paths;
const APP_ENTRY = pathsUtils.client('index.jsx');

const entry = {
  app: APP_ENTRY,
  vendor: config.compiler_vendors
};

const baseConfig = {
  entry: entry,
  output: {
    path: pathsUtils.dist('client'),
    publicPath: config.compiler_public_path,
    filename: '[name].[hash:8].js',
    chunkFilename: '[name].[chunkhash:8].js'
  },
  module: {
    rules: [
      { test: /\.js(x?)$/, use: ['react-hot-loader', 'babel-loader'], exclude: /node_modules/ }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: '[name].[hash:8].js' }),
    new ExtractTextPlugin({
      filename: '[id].[name].[contenthash:6].css',
      allChunks: true
    })
  ]
};

module.exports = baseConfig;
