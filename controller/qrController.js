const { sendSMS } = require('../service/twilioService');

// Controlador para manejar el escaneo del QR
const qrScanned = async (req, res) => {
    const { phoneNumber } = req.body;

    if (!phoneNumber) {
        return res.status(400).json({ error: 'Número de teléfono no proporcionado' });
    }

    try {
        // Envía un mensaje SMS con Twilio
        const message = await sendSMS(phoneNumber, 'Ya se puede enviar mensajes');
        console.log(`Mensaje enviado con SID: ${message.sid}`);

        // Respuesta exitosa
        return res.json({ message: 'Mensaje enviado con éxito' });
    } catch (error) {
        console.error('Error enviando el mensaje:', error);
        return res.status(500).json({ error: 'No se pudo enviar el mensaje' });
    }
};

module.exports = {
    qrScanned
};