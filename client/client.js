// require the spee.ch package
const Speech = require('spee.ch');

Speech.Client();

// // get the local configs
// const { siteConfig } = require('../config/');
//
// try {
//     // create new client
//     const client = new Speech.Client();
//     // update config (note: required for build to grab local config)
//     client.updateConfig(siteConfig);
//     // run the client
//     client.start();
// } catch (error) {
//     console.log('client startup error:', error);
// }
