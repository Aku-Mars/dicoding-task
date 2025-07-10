const tf = require('@tensorflow/tfjs-node');
const { Storage } = require('@google-cloud/storage');
const storage = new Storage();
const bucketName = 'mlgc-arifin';
const modelPath = 'model/model.json';

exports.loadModel = async () => {
    const modelUrl = `gs://${bucketName}/${modelPath}`;
    return await tf.loadGraphModel(modelUrl);
};

exports.predict = async (model, imageBuffer) => {
    const tensor = tf.node.decodeImage(imageBuffer).resizeBilinear([224, 224]).expandDims();
    const prediction = model.predict(tensor);
    const result = prediction.dataSync()[0];

    return result > 0.5 ? 'Cancer' : 'Non-cancer';
};
