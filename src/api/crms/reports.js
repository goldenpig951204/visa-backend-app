const express = require("express");
const router = express.Router();
const ReportCtrl = require("../../controllers/crms/ReportController");

router.get("/", ReportCtrl.fetch);
router.get("/:id", ReportCtrl.fetchById);

module.exports = router;