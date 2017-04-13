// ────────────────────────────────────────────────────────────────────────────────
// MODULES

const path = require('path');
const merge = require('webpack-merge');

const common = require('./common');

// ────────────────────────────────────────────────────────────────────────────────

module.exports = merge(common, {
  output: {
    path: path.resolve(`${__dirname}/../lib`),
    filename: '[name].min.js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js',
    library: 'ac_[name]',
    libraryTarget: 'var',
  }
});
