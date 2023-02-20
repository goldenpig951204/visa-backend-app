const express = require('express');

const authApi = require("./auth");
const adminsApi = require('./admins');
const staffsApi = require('./staffs');
const agentsApi = require('./agents');
const applicationsApi = require('./applications');
const visaTypesApi = require('./visa-types');
const visaPricesApi = require('./visa-prices');
const visaDurationApi = require('./visa-durations');
const occupationItemsAPI = require('./occupation-items');
const agentVisaPricesApi = require('./agent-visa-prices');
const logosApi = require("./logos");
const communicationsApi = require("./communications");
const announcementsApi = require("./announcements");
const categoriesApi = require("./categories");
const invoicesApi = require("./invoices");
const transactionsApi = require("./transactions");
const reportsApi = require("./reports");
const contactsApi = require("./contacts");
const settingApi = require("./setting");

const router = express.Router();

router.use('/auth', authApi);
router.use('/admins', adminsApi);
router.use('/staffs', staffsApi);
router.use('/agents', agentsApi);
router.use('/applications', applicationsApi);
router.use('/visa-types', visaTypesApi);
router.use('/visa-prices', visaPricesApi);
router.use('/visa-durations', visaDurationApi);
router.use('/occupation-items', occupationItemsAPI)
router.use('/agent-visa-prices', agentVisaPricesApi);
router.use('/logos', logosApi);
router.use('/communications', communicationsApi);
router.use('/announcements', announcementsApi);
router.use("/categories", categoriesApi);
router.use("/invoices", invoicesApi);
router.use("/transactions", transactionsApi);
router.use("/reports", reportsApi);
router.use("/contacts", contactsApi);
router.use("/setting", settingApi);

module.exports = router;