// ────────────────────────────────────────────────────────────────────────────────
// MODULES

const path = require('path');
const merge = require('webpack-merge');
const common = require('./common');
const webpack = require('webpack');
const WebpackNotifierPlugin = require('webpack-notifier');

// ────────────────────────────────────────────────────────────────────────────────

common.entry.main.unshift('webpack/hot/only-dev-server');
common.entry.main.unshift('react-hot-loader/patch');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(`${__dirname}/../lib`),
    filename: '[name].min.js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js',
    library: 'ac_[name]',
    libraryTarget: 'var',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new WebpackNotifierPlugin({
      title: 'Webpack Bundler',
      alwaysNotify: true,
    }),
  ],
  devServer: {
    host: 'localhost',
    port: 3000,
    historyApiFallback: true,
    hot: true,
  },
});
