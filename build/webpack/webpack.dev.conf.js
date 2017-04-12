const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const webpackConfig = require('./webpack.base.conf');
const config = require('../../config/config');
const cssLoaders = require('../loaders/css-loaders');

const pathsUtils = config.utils_paths;

webpackConfig.devtool = 'eval';

// add hot-reload related code to entry chunks
const polyfill = 'eventsource-polyfill';  // 兼容ie
const devClient = './build/dev/dev-client';
const entry = webpackConfig.entry;
for (const key in entry) {
  const isVendorEntry = key === config.compiler_vendor_key;
  const extras = isVendorEntry ? [polyfill, devClient] : [devClient];
  entry[key] = extras.concat(entry[key]);
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
    title: '教育部学历证书电子注册备案表',
    filename: 'index.html',
    template: pathsUtils.client('template.html')
  }),
  new ProgressBarPlugin({ summary: false })
]);

module.exports = webpackConfig;
