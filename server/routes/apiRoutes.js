const { apiRoutes } = require('spee.ch');

const multipart = require('connect-multiparty');
const { publishing: { uploadDirectory } } = require('../../config/siteConfig.js');
const multipartMiddleware = multipart({uploadDir: uploadDirectory});

module.exports = (app) => {
    // channel routes
    app.get('/api/channel/availability/:name', apiRoutes.channelAvailabilityRoute);
    app.get('/api/channel/short-id/:longId/:name', apiRoutes.channelShortIdRoute);
    app.get('/api/channel/data/:channelName/:channelClaimId', apiRoutes.channelDataRoute);
    app.get('/api/channel/claims/:channelName/:channelClaimId/:page', apiRoutes.channelClaimsRoute);
    // claim routes
    app.get('/api/claim/list/:name', apiRoutes.claimListRoute);
    app.get('/api/claim/get/:name/:claimId', apiRoutes.claimGetRoute);
    app.get('/api/claim/availability/:name', apiRoutes.claimAvailabilityRoute);
    app.get('/api/claim/resolve/:name/:claimId', apiRoutes.claimResolveRoute);
    app.post('/api/claim/publish', multipartMiddleware, apiRoutes.claimPublishRoute);
    app.get('/api/claim/short-id/:longId/:name', apiRoutes.claimShortIdRoute);
    app.post('/api/claim/long-id', apiRoutes.claimLongIdRoute);
    app.get('/api/claim/data/:claimName/:claimId', apiRoutes.claimDataRoute);
    // file routes
    app.get('/api/file/availability/:name/:claimId', apiRoutes.fileAvailabilityRoute);
};
