const express = require("express");
const router = express.Router();
const VisaTypeCtrl = require("../../controllers/crms/VisaTypeController");

router.get("/", VisaTypeCtrl.fetch);

module.exports = router;