const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackConfig = require('./webpack.base.conf');
const config = require('../../config/config');
const cssLoaders = require('../loaders/css-loaders');

const pathsUtils = config.utils_paths;

// 默认的webpack会将require("style.css")文件嵌入js文件中，使用该插件会将css从js中提取出来
webpackConfig.module.rules = webpackConfig.module.rules.concat(cssLoaders({
  sourceMap: false,
  extract: true
}));

// 自动写入将引用写入html
webpackConfig.plugins = webpackConfig.plugins.concat([
  new HtmlWebpackPlugin({
    title: '云汐吐槽网',
    filename: 'index.html',
    template: pathsUtils.client('template.html')
  })
]);

module.exports = webpackConfig;
