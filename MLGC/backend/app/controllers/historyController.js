const { getAllPredictions } = require('../services/firestoreService');

exports.getHistories = async (request, h) => {
    try {
        const data = await getAllPredictions();

        return h.response({
            status: 'success',
            data,
        }).code(200);
    } catch (error) {
        return h.response({
            status: 'fail',
            message: 'Gagal mengambil riwayat prediksi',
        }).code(500);
    }
};
