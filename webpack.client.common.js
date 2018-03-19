const Path = require('path');

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
        exclude: /node_modules/,
        query  : {
          presets: ['es2015', 'react', 'stage-2'],
        },
      },
    ],
  },
  resolve: {
    modules: [
      'node_modules',
      __dirname,
    ],
    extensions: ['.js', '.jsx', '.scss'],
  },
};
