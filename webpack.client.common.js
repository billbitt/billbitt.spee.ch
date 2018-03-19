const Path = require('path');
const SPEECH_CLIENT_ROOT = Path.resolve(__dirname, '/node_modules/spee.ch/client/');

module.exports = {
  target: 'web',
  entry : ['babel-polyfill', 'whatwg-fetch', './client/client.js'],
  output: {
    path      : Path.join(__dirname, 'public/bundle/'),
    publicPath: 'public/bundle/',
    filename  : 'bundle.js',
  },
  module: {
    loaders: [
      {
        test   : /.jsx?$/,
        loader : 'babel-loader',
        exclude: /node_modules\/(?!(spee.ch)\/).*/,
        query  : {
          presets: ['es2015', 'react', 'stage-2'],
        },
      },
    ],
  },
  resolve: {
    modules: [
      SPEECH_CLIENT_ROOT,
      'node_modules',
      __dirname,
    ],
    extensions: ['.js', '.jsx', '.scss'],
  },
};
