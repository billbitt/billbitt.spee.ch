// require the spee.ch package
const speech = require('spee.ch');
// get config files
const { mysqlConfig, siteConfig, slackConfig } = require('./config')
const pages = require('./pages');

try {
    // create a new spee.ch server
    const server = new speech.server();
    // configure server
    server.configureMysql(mysqlConfig);
    server.configureSite(siteConfig);
    server.configureSlack(slackConfig);
    // initialize (creates the express app and configures it)
    server.initialize();
    // start the server (syncs db and
    server.start();
} catch (error) {
    console.log('spee.ch server startup error:', error);
}
