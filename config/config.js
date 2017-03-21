const path = require('path');
const debug = require('debug')('app:config')

const config = {
  env: process.env.NODE_ENV || 'development',

  // path options
  path_base: path.resolve(__dirname, '..'),
  dir_html: 'server/views',
  dir_client: 'client',
  dir_server: 'server',
  dir_dist: 'dist',

  // compiler options
  compiler_babel: {
    cacheDirectory: true,
    plugins: ["transform-runtime"],
    presets: ["es2015", "react", "stage-0"]
  },
  compiler_devtool: 'source-map',
  compiler_hash_type: 'hash',
  compiler_fail_on_warning: false,
  compiler_quiet: false,
  compiler_public_path: '/',
  compiler_stats: {
    chunk: false,
    chunkModules: false,
    color: true
  },
  compiler_vendors: [
    'react',
    'react-redux',
    'react-router',
    'redux',
    'axios'
  ],

  // Proxy Configuration -> path: host
  proxyTable: {},
};

// ------------------------------------
// Validate Vendor Dependencies
// ------------------------------------
const pkg = require('../package.json');
config.compiler_vendors = config.compiler_vendors.filter(dep => {
  if (pkg.dependencies[dep]) {
    return true;
  }

  debug(`Package "${dep}" was not found as an npm dependency in package.json; ` +
      `it won't be included in the webpack vendor bundle.
       Consider removing it from compiler_vendors in ~/config/config.js`)
});

// ------------------------------------
// Utilities
// ------------------------------------
function base () {
  const args = [config.path_base].concat(([]).slice.apply(arguments));
  return path.resolve.apply(path, args);
}

config.utils_paths = {
  base: base,
  client: base.bind(null, config.dir_client),
  html: base.bind(null, config.dir_html),
  dist: base.bind(null, config.dir_dist)
};

module.exports = config;
