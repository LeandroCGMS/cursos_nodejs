'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

//conecta ao banco
mongoose.connect('mongodb://leandro:senhaFacil123@ds038888.mlab.com:38888/ndstr');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Carrega os Models
const Product = require('./models/product');


//Carrega as Rotas
const indexRoute = require('./routes/index-route.js');
const productRoute = require('./routes/product-route.js');

app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;