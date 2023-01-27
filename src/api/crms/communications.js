const express = require("express");
const router = express.Router();
const CommunicationCtrl = require("../../controllers/crms/CommunicationController");

router.get("/contacts", CommunicationCtrl.getContacts);
router.get("/messages", CommunicationCtrl.getMessages);
router.post("/messages", CommunicationCtrl.saveMessage);

module.exports = router;