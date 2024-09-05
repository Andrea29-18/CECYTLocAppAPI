const geolocationService = require('../service/geolocationService');

const getGeolocation = async (req, res) => {
    const ip = req.ip; // Usa la IP pública del cliente o una de prueba

    try {
        const location = await geolocationService.getGeolocationByIP(ip);
        res.status(200).json({
            message: 'Ubicación obtenida con éxito',
            latitude: location.latitude,
            longitude: location.longitude,
            city: location.city,
            country: location.country,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getGeolocation,
};
