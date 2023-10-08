require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();
const configEngine = require('../src/config/templateEngine.js');
const morgan = require('morgan');
const webRoutes = require('./routes/web.js');

const PORT = process.env.PORT || 8082;

app.use(morgan('combined'));

app.use(express.static(path.join(__dirname, 'public')));

// Template Engine
configEngine(app);

// Routes
app.use('/', webRoutes);

// Connection
app.listen(PORT, () => {
    console.log('App running in port: http://localhost:' + PORT)
})