const { routes: { asset } } = require('spee.ch');

module.exports = (app, db) => {
    app.get('/:identifier/:claim', asset.serveAssetByIdentifierAndClaim(db));
    app.get('/:claim', asset.serveAssetByClaim(db));
};
