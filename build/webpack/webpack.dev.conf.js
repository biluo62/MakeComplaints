const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const webpackConfig = require('./webpack.base.conf');
const config = require('../../config/config');
const cssLoaders = require('../loaders/css-loaders');

const pathsUtils = config.utils_paths;

webpackConfig.devtool = 'eval';

// add hot-reload related code to entry chunks
var polyfill = 'eventsource-polyfill';
var devClient = './build/dev/dev-client';
for (const key in webpackConfig.entry) {
  const isVendorEntry = key === config.compiler_vendor_key;
  var extras = isVendorEntry ? [polyfill, devClient] : [devClient];
  webpackConfig.entry[key] = extras.concat(webpackConfig.entry[key]);
}

// 默认的webpack会将require("style.css")文件嵌入js文件中，使用该插件会将css从js中提取出来
webpackConfig.module.rules = webpackConfig.module.rules.concat(cssLoaders({
  sourceMap: false,
  extract: true
}));

// 自动写入将引用写入html
webpackConfig.plugins = webpackConfig.plugins.concat([
  new webpack.HotModuleReplacementPlugin(),
  new HtmlWebpackPlugin({
    title: '云汐吐槽网',
    filename: 'index.html',
    template: pathsUtils.client('template.html')
  }),
  new ProgressBarPlugin({ summary: false })
]);

module.exports = webpackConfig;
