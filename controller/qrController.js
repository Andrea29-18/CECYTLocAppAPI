const qrService = require('../service/qrService');

const generateQR = async (req, res) => {
    const { text } = req.body;

    try {
        const filePath = await qrService.generateQR(text);
        res.status(200).json({ message: 'QR generado exitosamente', filePath });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    generateQR,
};
