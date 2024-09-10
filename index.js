const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const qrRouter = require('./routers/qrRouter');
const locationRoutes = require('./routers/locationRoutes');

app.use('/api', qrRouter);
app.use('/api', locationRoutes);


const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});