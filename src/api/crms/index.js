const express = require('express');

const authApi = require("./auth");
const adminsApi = require('./admins');
const staffsApi = require('./staffs');
const agentsApi = require('./agents');
const applicationsApi = require('./applications');
const visaTypesApi = require('./visa-types');
const visaPricesApi = require('./visa-prices');
const agentVisaPricesApi = require('./agent-visa-prices');
const logosApi = require("./logos");
const communicationsApi = require("./communications");

const router = express.Router();

router.use('/auth', authApi);
router.use('/admins', adminsApi);
router.use('/staffs', staffsApi);
router.use('/agents', agentsApi);
router.use('/applications', applicationsApi);
router.use('/visa-types', visaTypesApi);
router.use('/visa-prices', visaPricesApi);
router.use('/agent-visa-prices', agentVisaPricesApi);
router.use('/logos', logosApi);
router.use('/communications', communicationsApi);

module.exports = router;