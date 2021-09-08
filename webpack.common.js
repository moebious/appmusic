const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const { NODE_ENV = 'production' } = process.env;

module.exports = {
  context: __dirname,
  mode: NODE_ENV,
  target: 'node',
  externals: [nodeExternals()],
  output: {
    libraryTarget: 'commonjs',
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.mjs', '.json', '.ts'],
    symlinks: false,
    cacheWithContext: false,
    alias: {
      '@user': path.resolve(__dirname, 'src/lib/user/'),
      '@music': path.resolve(__dirname, 'src/lib/music/'),
    },
  },
  plugins: [new CleanWebpackPlugin(), new Dotenv()],
  module: {
    rules: [
      {
        test: /\.(tsx?)$/,
        loader: 'ts-loader',
        exclude: [
          [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, '.webpack'),
          ],
        ],
        options: {
          transpileOnly: true,
          experimentalWatchApi: true,
        },
      },
    ],
  },
};
