const { Firestore } = require('@google-cloud/firestore');
const firestore = new Firestore();

exports.savePrediction = async (data) => {
    const predictions = firestore.collection('predictions');
    await predictions.doc(data.id).set(data);
};

exports.getAllPredictions = async () => {
    const predictions = firestore.collection('predictions');
    const snapshot = await predictions.get();

    return snapshot.docs.map(doc => ({
        id: doc.id,
        history: doc.data(),
    }));
};
