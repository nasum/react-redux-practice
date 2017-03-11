const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');

module.exports = webpackMerge(baseConfig, {
  plugins:[
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
});
