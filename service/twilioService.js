require('dotenv').config();
const twilio = require('twilio');

// Configura Twilio con las variables de entorno
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

// Función para enviar un mensaje SMS
const sendSMS = (phoneNumber, messageBody) => {
    return client.messages.create({
        body: messageBody,
        from: process.env.TWILIO_PHONE_NUMBER,
        to: phoneNumber
    });
};

module.exports = {
    sendSMS
};
