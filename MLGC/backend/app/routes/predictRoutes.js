const predictController = require('../controllers/predictController');

module.exports = [
    {
        method: 'POST',
        path: '/predict',
        handler: predictController.handlePrediction,
        options: {
            payload: {
                output: 'stream',
                parse: true,
                multipart: true,
                allow: ['multipart/form-data', 'image/png', 'image/jpeg'],
                maxBytes: 1000000, // 1 MB
            },
        },
    },
];
