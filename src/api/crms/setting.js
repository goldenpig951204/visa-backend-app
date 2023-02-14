const express = require("express");
const router = express.Router();
const SettingCtrl = require("../../controllers/crms/SettingController");

router.get("/", SettingCtrl.fetch);
router.post("/", SettingCtrl.update);

module.exports = router;