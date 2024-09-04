const express = require('express');
const qrController = require('../controller/qrController');

const router = express.Router();

router.post('/generate-qr', qrController.generateQR);

module.exports = router;
