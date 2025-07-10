const historyController = require('../controllers/historyController');

module.exports = [
    {
        method: 'GET',
        path: '/predict/histories',
        handler: historyController.getHistories,
    },
];
