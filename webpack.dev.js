const { merge } = require('webpack-merge');
const webpackCommon = require('./webpack.common');

/** @type {import('webpack').Configuration} */

module.exports = merge(webpackCommon, {
  mode: 'development',
  devServer: {
    // open: true,
    port: 8080,
    historyApiFallback: true,
  },
  devtool: 'source-map',
});
