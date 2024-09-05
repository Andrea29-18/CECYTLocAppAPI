const express = require('express');
const bodyParser = require('body-parser');
const geolocationRouter = require('./routers/geolocationRouter');
const qrRouter = require('./routers/qrRouter');

const app = express();
app.use(bodyParser.json());

app.use('/api', geolocationRouter);
app.use('/api', qrRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
