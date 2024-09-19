// routes/poolRoutes.js
const express = require('express');
const router = express.Router();
const poolController = require('../../controllers/resources-controllers/poolController');


router.get('/getAllPools', poolController.getAllPools); // http://localhost:3000/pools/getAllPools

router.post('/postPool', poolController.postPool); // http://localhost:3000/pools/postPool
router.get('/:poolId', poolController.getPoolById);
router.get('/', poolController.getPools);




module.exports = router;
