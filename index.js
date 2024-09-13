const express = require('express');
const app = express();
const qrRoutes = require('./routers/qrRouter');

const port = 3000;

app.use(express.json()); 

// Usar las rutas de QR
app.use('/api', qrRoutes);

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
