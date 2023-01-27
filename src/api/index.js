const express = require('express');

const agent = require('./agent');
const visa = require('./visa');
const payment = require('./payment');
const crms = require('./crms');

const router = express.Router();

router.use('/agent', agent);
router.use('/visa', visa);
router.use('/payment', payment);
router.use('/crms', crms);

module.exports = router;
