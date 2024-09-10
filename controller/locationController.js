const { obtenerDireccionDesdeCoordenadas } = require('../service/locationService');

const obtenerUbicacion = async (req, res) => {
    const { lat, lng } = req.body;

    try {
        const direccion = await obtenerDireccionDesdeCoordenadas(lat, lng);
        res.json({ direccion });
    } catch (error) {
        res.status(500).json({ message: 'Error obteniendo la ubicación.' });
    }
};

module.exports = { obtenerUbicacion };
