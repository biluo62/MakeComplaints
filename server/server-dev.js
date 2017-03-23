// Provide custom regenerator runtime and core-js
require('babel-polyfill');
const AV = require('leanengine');

AV.init({
  appId: process.env.LEANCLOUD_APP_ID,
  appKey: process.env.LEANCLOUD_APP_KEY,
  masterKey: process.env.LEANCLOUD_APP_MASTER_KEY
});

// 如果不希望使用 masterKey 权限，可以将下面一行删除
AV.Cloud.useMasterKey();

const webpack = require('webpack');

const app = require('./app');
const config = require('../build/webpack/webpack.dev.conf');
const exec = require('child_process').exec;

const compiler = webpack(config);

// 移动pre-commit到.git/hooks目录下
exec('cp ./pre-commit ./.git/hooks/pre-commit', (err) => {
  if (err) {
    console.error('Caught exception:', err.stack);
  } else {
    console.log('moved pre-commit to path ./.git/hooks');
  }
});

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')());

// serve webpack bundle output
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: false,
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
    chunks: false
  }
}));

// enable hot-reload and state-preserving
// compilation error display
app.use(require('webpack-hot-middleware')(compiler));

// error  handlers
const errorHandler = require('./error-handler');

app.use(errorHandler(app));

// 端口一定要从环境变量 `LEANCLOUD_APP_PORT` 中获取。
// LeanEngine 运行时会分配端口并赋值到该变量。
const PORT = parseInt(process.env.LEANCLOUD_APP_PORT || process.env.PORT || 3000, 10);

app.listen(PORT, () => {
  console.log(`\r\nListening at http://localhost:${PORT}`);
  console.log('Node app is running on port:', PORT);

  // 注册全局未捕获异常处理器
  process.on('uncaughtException', (err) => {
    console.error('Caught exception:', err.stack);
  });
  process.on('unhandledRejection', (reason, p) => {
    console.error('Unhandled Rejection at: Promise ', p, ' reason: ', reason.stack);
  });
});
