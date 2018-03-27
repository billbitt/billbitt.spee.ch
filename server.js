// app dependencies
const express = require('express');
const bodyParser = require('body-parser');
const expressHandlebars = require('express-handlebars');
const Handlebars = require('handlebars');
const helmet = require('helmet');
const passport = require('passport');
const cookieSession = require('cookie-session');
const http = require('http');
const Speech = require('spee.ch');
const { serializeSpeechUser, deserializeSpeechUser } = require('./server/helpers/authHelpers.js');

// update configs in the spee.ch package with local config values
const localLoggerConfig = require('./config/loggerConfig.js');
const localMysqlConfig = require('./config/mysqlConfig.js');
const localSlackConfig = require('./config/slackConfig.js');
Speech.config.logger.configure(localLoggerConfig);
Speech.config.slack.configure(localSlackConfig);
Speech.config.mysql.configure(localMysqlConfig);

const siteConfig = require('./config/siteConfig.js');
const { auth: { sessionKey } } = siteConfig;
const { details: { port: PORT } } = siteConfig;

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

// configure passport
passport.serializeUser(serializeSpeechUser);
passport.deserializeUser(deserializeSpeechUser);
const localSignupStrategy = require('./passport/local-signup.js');
const localLoginStrategy = require('./passport/local-login.js');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);
// initialize passport
app.use(cookieSession({
    name  : 'session',
    keys  : [this.sessionKey],
    maxAge: 24 * 60 * 60 * 1000, // i.e. 24 hours
}));
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
// require('./routes/auth-routes.js')(app);
require('./routes/api-routes.js')(app);
// require('./routes/page-routes.js')(app);
// require('./routes/asset-routes.js')(app);
// require('./routes/fallback-routes.js')(app);

// create server
const server = http.Server(app);

// start server
const db = Speech.db;  // note: must come after configuration of mysql above ?
db.sequelize.sync()  // sync sequelize
    .then(() => {  // start the server
        server.listen(PORT, () => {
            console.log(`Server is listening on PORT ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(`Startup Error:`, error);
    });
