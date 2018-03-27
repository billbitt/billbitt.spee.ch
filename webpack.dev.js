const clientBaseConfig = require('./webpack.client.common.js');
const serverBaseConfig = require('./webpack.server.common.js');
const merge = require('webpack-merge');

const devBuildConfig = {
  watch  : true,
  devtool: 'inline-source-map',
};

module.exports = [
  merge(clientBaseConfig, devBuildConfig),
  merge(serverBaseConfig, devBuildConfig),
];
