const IPGeolocationAPI = require('ip-geolocation-api-javascript-sdk/IPGeolocationAPI');
const GeolocationParams = require('ip-geolocation-api-javascript-sdk/GeolocationParams');

// Inicializa la API con tu API Key
const ipgeolocationApi = new IPGeolocationAPI('', false); // Reemplaza con tu API Key

// Función para obtener geolocalización
const getGeolocationByIP = async (ip) => {
    return new Promise((resolve, reject) => {
        const geolocationParams = new GeolocationParams();
        geolocationParams.setIPAddress(ip);

        // Agregar más información en la consola sobre la solicitud
        console.log(`Solicitando geolocalización para IP: ${ip}`);

        ipgeolocationApi.getGeolocation((response) => {
            if (response && response.geo) {
                resolve({
                    latitude: response.geo.latitude,
                    longitude: response.geo.longitude,
                    city: response.geo.city,
                    country: response.geo.country_name,
                });
            } else {
                console.error('Error en la respuesta de la API:', response);
                reject(new Error('Error obteniendo la geolocalización. Detalles de la respuesta: ' + JSON.stringify(response)));
            }
        }, geolocationParams);
    });
};

module.exports = {
    getGeolocationByIP,
};
