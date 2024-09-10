const express = require('express');
const { obtenerUbicacion } = require('../controllers/locationController');

const router = express.Router();

router.post('/get-location', obtenerUbicacion);

module.exports = router;
