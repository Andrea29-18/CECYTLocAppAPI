const express = require('express');
const bodyParser = require('body-parser');
const qrRouter = require('./routers/qrRouter');
const path = require('path');

const app = express();

app.use(bodyParser.json());

// Hacer que la carpeta storage sea accesible públicamente
app.use('/storage', express.static(path.join(__dirname, 'storage')));

app.use('/api', qrRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
