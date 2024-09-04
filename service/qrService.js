const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');

// Función para generar y guardar un código QR como imagen
const generateQR = async (text) => {
    const fileName = `${Date.now()}_qrcode.png`; // Nombre único para cada archivo
    const filePath = path.join(__dirname, '../storage/qrcodes', fileName); // Ruta de almacenamiento

    try {
        // Generar el QR y guardarlo como archivo en la carpeta storage/qrcodes
        await QRCode.toFile(filePath, text);
        return filePath; // Retorna la ruta del archivo guardado
    } catch (error) {
        throw new Error('Error generating QR Code');
    }
};

module.exports = {
    generateQR,
};

