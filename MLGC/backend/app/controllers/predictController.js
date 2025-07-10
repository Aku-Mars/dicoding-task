const { validateFile } = require('../utils/fileValidation');
const { loadModel, predict } = require('../services/modelService');
const { savePrediction } = require('../services/firestoreService');
const { v4: uuidv4 } = require('uuid');

exports.handlePrediction = async (request, h) => {
    try {
        const { image } = request.payload;

        if (!validateFile(image)) {
            return h.response({
                status: 'fail',
                message: 'Terjadi kesalahan dalam melakukan prediksi',
            }).code(400);
        }

        const model = await loadModel();
        const result = await predict(model, image._data);

        const id = uuidv4();
        const createdAt = new Date().toISOString();
        const response = {
            id,
            result,
            suggestion: result === 'Cancer' ? 'Segera periksa ke dokter!' : 'Penyakit kanker tidak terdeteksi.',
            createdAt,
        };

        await savePrediction(response);

        return h.response({
            status: 'success',
            message: 'Model is predicted successfully',
            data: response,
        }).code(200);
    } catch (error) {
        return h.response({
            status: 'fail',
            message: 'Terjadi kesalahan dalam melakukan prediksi',
        }).code(400);
    }
};
