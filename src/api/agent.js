const express = require("express");
const router = express.Router();
const AgentCtrl = require("../controllers/AgentController");

router.post("/register", AgentCtrl.register);

module.exports = router;