// require the spee.ch package
const Speech = require('spee.ch');
// get the local configs
const loggerConfig = require('./config/loggerConfig.js');
const mysqlConfig = require('./config/mysqlConfig.js');
const siteConfig = require('./config/siteConfig.js');
const slackConfig = require('./config/slackConfig.js');

try {
    console.log(`Current directory (index.js): ${process.cwd()}`);
    // create a new spee.ch server
    const server = new Speech.Server();
    // configure server
    server.configureLogger(loggerConfig);
    server.configureMysql(mysqlConfig);
    server.configureSiteDetails(siteConfig);
    server.configureSlack(slackConfig);
    server.configureClientBundle();
    server.configureModels();
    server.configureRoutes();
    // initialize (creates the express app and configures it)
    server.initialize();
    // start the server (syncs db and
    server.start();
} catch (error) {
    console.log('server startup error:', error);
}
