const express = require('express');
const { qrScanned } = require('../controller/qrController');
const router = express.Router();

// Ruta para manejar el escaneo del código QR
router.post('/qr-scanned', qrScanned);

module.exports = router;
