const express = require("express");
const router = express.Router();
const ContactCtrl = require("../controllers/ContactController");

router.post("/", ContactCtrl.save);

module.exports = router;