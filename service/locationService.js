const axios = require('axios');
require('dotenv').config(); // Carga las variables de entorno

const googleMapsApiKey = process.env.GOOGLE_MAPS_API_KEY;

async function obtenerDireccionDesdeCoordenadas(lat, lng) {
    try {
        const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json`, {
            params: {
                latlng: `${lat},${lng}`,
                key: googleMapscApiKey,
            }
        });

        const direccion = response.data.results[0]?.formatted_address || 'Dirección no encontrada';
        console.log(`Dirección obtenida: ${direccion}`);
        return direccion;

    } catch (error) {
        console.error('Error obteniendo la dirección:', error);
        throw error;
    }
}

module.exports = { obtenerDireccionDesdeCoordenadas };
