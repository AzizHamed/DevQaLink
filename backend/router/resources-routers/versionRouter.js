const express = require('express');
const router = express.Router();
const { findAllVersions } = require('../../controllers/resources-controllers/versionsController');

// GET /servers/:clusterId
router.get('/findAll', findAllVersions);

module.exports = router;
