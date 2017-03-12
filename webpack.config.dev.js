const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');

module.exports = webpackMerge(baseConfig, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: 'build',
    port: 3000
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new WebpackBuildNotifierPlugin({
      title: "Build",
      logo: path.resolve("./img/favicon.png")
    })
  ]
});
