require('dotenv').config();
const twilio = require('twilio');

// Configura Twilio con las variables de entorno
const accountSid = 'TU SID DE CUENTA';
const authToken = 'TU TOKEN';
const client = twilio(accountSid, authToken);

// Función para enviar un mensaje SMS
const sendSMS = (phoneNumber, messageBody) => {
    return client.messages.create({
        body: messageBody,
        from: 'POS EL NIMERP DE TWILIO',
        to: 'A DONDE LO ENVIAS'
    });
};

module.exports = {
    sendSMS
};
