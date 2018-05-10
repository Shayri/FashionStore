/**
 * Configuration for express
 *
 */

// Dependencies
const express = require('express');
const mongoose = require('mongoose');

// Creating the express application
const app = express();

// mongoose connection
mongoose
  .connect('mongodb://root:root@ds259109.mlab.com:59109/fashion_store')
  .then(() => console.log('Connected to mlab'))
  .catch(err => console.log(err));

// Importing routes
const home = require('./routes/home.route');
const product = require('./routes/productMongo.route');

// Middleware for home route
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', home);
app.use('/api/products', product);

// Exporting the application
module.exports = app;
