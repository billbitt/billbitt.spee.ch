// require the spee.ch package
const speech = require('spee.ch');

// create a new spee.ch server
console.log('creating speech server');
server = new speech();

//configure the server
const config = require('./config');
server.startEngine(config);

// get local pages
server.getLocalPages('./pages');

// // get local routes
// server.getLocalRoutes('./routes');
//
// // get local models
// server.getLocalModels('./models');

// run speech
try {
    console.log('warming up the speech server');
    server.warmupEngine();
    console.log('starting speech server');
    server.blastoff();
} catch (error) {
    console.log('spee.ch server error:', error);
}
