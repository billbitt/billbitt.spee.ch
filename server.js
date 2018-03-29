// app dependencies
const express = require('express');
const bodyParser = require('body-parser');
const expressHandlebars = require('express-handlebars');
const Handlebars = require('handlebars');
const helmet = require('helmet');
const cookieSession = require('cookie-session');
const http = require('http');
const Speech = require('spee.ch');

// update configs in the spee.ch package with local config values
const localLoggerConfig = require('./config/loggerConfig.js');
const localSlackConfig = require('./config/slackConfig.js');
const localSiteConfig = require('./config/siteConfig.js');
Speech.logger.configure(localLoggerConfig);
Speech.slack.configure(localSlackConfig);
Speech.site.configure(localSiteConfig);

// create db and pass it to speech package
const db = require('./server/models');
// Speech.mysql.configure(db);

const { auth: { sessionKey } } = localSiteConfig;
const { details: { port: PORT } } = localSiteConfig;

// create an Express application
const app = express();

// trust the proxy to get ip address for us
app.enable('trust proxy');

// add necesssary middleware
app.use(helmet()); // set HTTP headers to protect against well-known web vulnerabilties
app.use(express.static(`${__dirname}/public`)); // 'express.static' to serve static files from public directory
app.use(bodyParser.json()); // 'body parser' for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // 'body parser' for parsing application/x-www-form-urlencoded

// add custom middleware (note: build out to accept dynamically use what is in server/middleware/
const requestLogger = require('./server/middleware/requestLogger.js');
app.use(requestLogger);

// initialize passport
app.use(cookieSession({
    name  : 'session',
    keys  : [sessionKey],
    maxAge: 24 * 60 * 60 * 1000, // i.e. 24 hours
}));
const passport = Speech.passport;
app.use(passport.initialize());
app.use(passport.session());

// configure handlebars & register it with express app
const hbs = expressHandlebars.create({
    defaultLayout: 'embed',
    handlebars   : Handlebars,
});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// set the routes on the app
require('./server/routes/auth.js')(app);
require('./server/routes/api.js')(app, db);
require('./server/routes/pages.js')(app);
require('./server/routes/assets.js')(app);
require('./server/routes/fallback.js')(app);

// create server
const server = http.Server(app);

// start server
db.sequelize.sync()  // sync sequelize
    .then(() => {  // start the server
        server.listen(PORT, () => {
            console.log(`Server is listening on PORT ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(`Startup Error:`, error);
    });
