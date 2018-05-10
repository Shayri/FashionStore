/**
 * Routing for products
 *
 */

// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

// Importing models
const Product = require('../models/product.model');

/**
 * Routes
 */

// Create a Product
router.post('/', (req, res) => {
  const p = new Product({
    title: req.body.title,
    category: req.body.category,
    price: req.body.price,
    imageUrl: req.body.imageUrl
  });
  p
    .save()
    .then(() => res.status(200).json({ success: 'Product created' }))
    .catch(err => res.status(500).json({ error: err }));
});

// Read all the products
router.get('/', (req, res) => {
  Product.find()
    .exec()
    .then(p => res.status(200).json(p))
    .catch(err => res.status(500).json({ error: err }));
});

// Read a single product
router.get('/:id', (req, res) => {
  Product.findOne({ _id: req.params.id })
    .exec()
    .then(p => res.status(200).json(p))
    .catch(err => res.status(500).json({ error: err }));
});

// Update a product
router.patch('/:id', (req, res) => {
  console.log(req.params.id);
  res.status(200).json({ success: 'Product updated' });
});

// Delete a product
router.delete('/:id', (req, res) => {
  Product.remove({ _id: req.params.id })
    .exec()
    .then(() => res.status(200).json('Product deleted'))
    .catch(err => res.status(500).json({ error: err }));
});

// Export this module
module.exports = router;
