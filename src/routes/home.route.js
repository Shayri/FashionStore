/**
 * Home routing
 * 
 */

 // Dependencies
 const express = require('express');

 // Creating a router
 const router = express.Router();
 
 // Sample HTTP GET call
 router.get('/', (req, res) => {
     res.status(200).send('Hello world');
 });
 
 // Export router
 module.exports = router;
 