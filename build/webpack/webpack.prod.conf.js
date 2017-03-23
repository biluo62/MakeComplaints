const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackConfig = require('./webpack.base.conf');
const config = require('../../config/config');
const cssLoaders = require('../loaders/css-loaders');

const pathsUtils = config.utils_paths;
const APP_ENTRY = pathsUtils.client('index.jsx');

webpackConfig.devtool = false;

// 默认的webpack会将require("style.css")文件嵌入js文件中，使用该插件会将css从js中提取出来
webpackConfig.module.rules = webpackConfig.module.rules.concat(cssLoaders({
  sourceMap: false,
  extract: true
}));

webpackConfig.plugins = webpackConfig.plugins ? webpackConfig.plugins : [];
webpackConfig.plugins = webpackConfig.plugins.concat([
  new CleanWebpackPlugin([config.dir_dist], {
    root: pathsUtils.base(),
    verbose: true
  }),
  new HtmlWebpackPlugin({
    title: '云汐吐槽网',
    filename: 'index.html',
    template: pathsUtils.client('template.html'),
    minify: {
      collapseWhitespace: true,
      removeAttributeQuotes: true,
      removeComments: true,
      removeEmptyAttributes: true
    }
  })
])

module.exports = webpackConfig;
