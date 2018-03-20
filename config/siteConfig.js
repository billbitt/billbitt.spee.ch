import HomePage from '../client/pages/HomePage';

module.exports = {
    analytics: {
        googleId: 'UA-60403362-6',
    },
    assetDefaults: {
        title      : 'someting cool',
        thumbnail  : 'https://spee.ch/assets/img/video_thumb_default.png',
        description: 'this cool thing is brought to you by billbitt.spee.ch',
    },
    auth: {
        sessionKey: 'n$a1n#sl1jas1df23',
    },
    details: {
        port       : 3000,
        title      : 'billbitt.Spee.ch',
        host       : 'https://dev1.spee.ch',
        description: 'billbitt.spee.ch running on dev1.spee.ch',
    },
    componentsConfig: {
        components: {},
        containers: {},
        pages: {
            HomePage,
        },
    },
    publishing: {
        additionalClaimAddresses: ['banpwixPosfVDWnGvXqU2af36Qpsd7buGd'],
        disabled                : false,
        disabledMessage         : 'Please check back soon or join our discord channel for updates.',
        primaryClaimAddress     : 'bDZ2wPwtULUGxT7GXuNLpQhXmdPRUTUkcL',
        thumbnailChannel        : '@stuffff',
        thumbnailChannelId      : 'idk',
        uploadDirectory: '/home/lbry/Uploads',
    },
};
