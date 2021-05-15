const { merge } = require('webpack-merge');
const webpackCommon = require('./webpack.common');

/** @type {import('webpack').Configuration} */

module.exports = merge(webpackCommon, {
  mode: 'production',
  optimization: {
    minimize: true,
  },
});
