const express = require('express');
const Router = express.Router();
const { gethomepage } = require('../app/controllers/homeController.js');


Router.get('/', gethomepage);

module.exports = Router;