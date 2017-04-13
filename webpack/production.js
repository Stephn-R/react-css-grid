// ────────────────────────────────────────────────────────────────────────────────
// MODULES

const path = require('path');
const merge = require('webpack-merge');

const common = require('./common');

// ────────────────────────────────────────────────────────────────────────────────

module.exports = merge(common, {
  devtool: 'cheap-module-source-map',
  output: {
    path: path.resolve(`${__dirname}/../lib`),
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js',
    library: 'ac_[name]',
    libraryTarget: 'var',
  }
});
