## 使用webpack搭建React+React-Router+Redux项目中遇到的问题

### 一、开发模式下Webpack报错： Uncaught Error: [HMR] Hot Module Replacement is disabled.

解决办法: 在webpack.dev.config.js是添加HotModuleReplacementPlugin插件
``` js webpack.dev.config.js
{
  ...,
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    ...
  ]
}
```
