const Path = require('path');
const nodeExternals = require('webpack-node-externals');
const SPEECH_CLIENT_ROOT = Path.resolve(__dirname, '/node_modules/spee.ch/client/');

module.exports = {
  target: 'node',
  node  : {
    __dirname: false,
  },
  externals: [nodeExternals({whitelist: ['spee.ch']})],
  entry    : ['babel-polyfill', 'whatwg-fetch', './server/server.js'],
  output   : {
    path         : Path.join(__dirname, '/'),
    publicPath   : '/',
    filename     : 'index.js',
    library      : '',
    libraryTarget: 'commonjs-module',
  },
  module: {
    rules: [
      {
        test   : /.jsx?$/,
        exclude: /node_modules\/(?!(spee.ch)\/).*/,
        loader : 'babel-loader',
        options: {
          presets: ['es2015',  'react', 'stage-2'],
        },
      },
      {
        test  : /.css$/,
        loader: 'css-loader',
      },
    ],
  },
  resolve: {
    modules: [
      SPEECH_CLIENT_ROOT,
      'node_modules',
      __dirname,
    ],
    extensions: ['.js', '.json', '.jsx', '.css'],
  },
};
