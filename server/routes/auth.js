const { passport, routes: { auth } } = require('spee.ch');

module.exports = (app) => {
  app.post('/signup', passport.authenticate('local-signup'), auth.signup());
  app.post('/login', auth.login(passport));
  app.get('/logout', auth.logout());
  app.get('/user', auth.user());
};
