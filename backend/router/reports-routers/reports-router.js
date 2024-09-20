var express = require('express');
var router = express.Router();

var {fetchReports} = require('../../controllers/reports-controllers/reportsController');

router.get('/findAll', fetchReports);

module.exports = router;