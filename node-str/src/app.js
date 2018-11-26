'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


//Carrega as Rotas
const indexRoute = require('./routes/index-route.js');
const productRoute = require('./routes/product-route.js');

app.use('/', indexRoute);
app.use('/products', productRoute);



module.exports = app;