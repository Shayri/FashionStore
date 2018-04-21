/**
* Home routing
* 
*/

// Dependencies
const express = require('express');

// Creating a router
const router = express.Router();

// Sample HTTP GET call
router.get('/', (req, res) => {
res.status(200).send('Hello from route.');
});

// Export router
module.exports = router; 