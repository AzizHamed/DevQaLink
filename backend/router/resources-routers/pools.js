// routes/pools.js
const express = require('express');
const router = express.Router();
const poolsController = require('../../controllers/resources-controllers/poolsController');

// GET request to list all pools
router.get('/getAllPools', poolsController.getAllPools); // http://localhost:3000/pools/getAllPools

router.post('/postPool', poolsController.postPool); // http://localhost:3000/pools/postPool

module.exports = router;