const { routes: { page } } = require('spee.ch');

module.exports = (app) => {
    app.get('/', page.sendReactApp());
    app.get('/login', page.sendReactApp());
    app.get('/about', page.sendReactApp());
    app.get('/trending', page.redirect('/popular'));
    app.get('/popular', page.sendReactApp());
    app.get('/new', page.sendReactApp());
    // route to send embedable video player (for twitter)
    app.get('/embed/:claimId/:name', page.sendEmbedPage());
};
