const { routes: { api } } = require('spee.ch');
const multipart = require('connect-multiparty');
const { publishing: { uploadDirectory } } = require('../../config/siteConfig.js');
const multipartMiddleware = multipart({uploadDir: uploadDirectory});

module.exports = (app, db) => {
    // channel routes
    app.get('/api/channel/availability/:name', api.channelAvailability());
    app.get('/api/channel/short-id/:longId/:name', api.channelShortId(db));
    app.get('/api/channel/data/:channelName/:channelClaimId', api.channelData());
    app.get('/api/channel/claims/:channelName/:channelClaimId/:page', api.channelClaims());
    // claim routes
    app.get('/api/claim/list/:name', api.claimList());
    app.get('/api/claim/get/:name/:claimId', api.claimGet(db));
    app.get('/api/claim/availability/:name', api.claimAvailability());
    app.get('/api/claim/resolve/:name/:claimId', api.claimResolve());
    app.post('/api/claim/publish', multipartMiddleware, api.claimPublish());
    app.get('/api/claim/short-id/:longId/:name', api.claimShortId());
    app.post('/api/claim/long-id', api.claimLongId());
    app.get('/api/claim/data/:claimName/:claimId', api.claimData(db));
    // file routes
    app.get('/api/file/availability/:name/:claimId', api.fileAvailability());
};
