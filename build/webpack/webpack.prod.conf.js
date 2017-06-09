const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const UglifyJsParallelPlugin = require('webpack-parallel-uglify-plugin');
const os = require('os');
const webpackConfig = require('./webpack.base.conf');
const config = require('../../config/config');
const cssLoaders = require('../loaders/css-loaders');

const pathsUtils = config.utils_paths;
// const APP_ENTRY = pathsUtils.client('index.jsx');

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
    title: '教育部学历证书电子注册备案表',
    filename: 'index.html',
    template: pathsUtils.client('template.html'),
    minify: {
      collapseWhitespace: true,
      removeAttributeQuotes: true,
      removeComments: true,
      removeEmptyAttributes: true
    }
  }),
  // gzip uglify
  new CompressionWebpackPlugin({
    asset: '[path].gz[query]',
    algorithm: 'gzip',
    test: /\.(js|html)$/,
    threshold: 10240,
    minRatio: 0.8
  }),
  // 增强 uglifyPlugin
  new UglifyJsParallelPlugin({
    workers: os.cpus().length,
    mangle: true,
    compressor: {
      warnings: false,
      drop_console: true,
      drop_debugger: true
    }
  })
]);

module.exports = webpackConfig;
