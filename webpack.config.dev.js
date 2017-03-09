const path = require('path');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');

module.exports = webpackMerge(baseConfig, {
  devtool: 'inline-source-map',
  plugins: [
    new WebpackBuildNotifierPlugin({
      title: "Build",
      logo: path.resolve("./img/favicon.png")
    })
  ]
});
