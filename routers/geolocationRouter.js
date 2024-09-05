const express = require('express');
const geolocationController = require('../controller/geolocationController');

const router = express.Router();

router.get('/geolocation', geolocationController.getGeolocation);

module.exports = router;
