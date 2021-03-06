// ────────────────────────────────────────────────────────────────────────────────
// MODULES

const path = require('path');
const webpack = require('webpack');

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'dev') {
  require('dotenv').config();
}

// ────────────────────────────────────────────────────────────────────────────────

module.exports = {
  entry: {
    main: ['./src/index'],
    grid: ['./src/grid/index'],
  },
  output: {
    path: path.resolve(`${__dirname}/../lib`),
    publicPath: '/',
    filename: '[name].min.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          'babel-loader',
        ],
        exclude: /(node_modules)/,
      }
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      ENV: JSON.stringify(process.env.NODE_ENV),
    }),
  ],
};
