const { routes: { page } } = require('spee.ch');

module.exports = (app) => {
    app.get('*', page.sendReactApp());
};
