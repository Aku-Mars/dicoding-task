exports.validateFile = (file) => {
    const allowedTypes = ['image/png', 'image/jpeg'];
    if (!file || !allowedTypes.includes(file.hapi.headers['content-type'])) {
        return false;
    }
    return true;
};
