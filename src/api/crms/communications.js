const express = require("express");
const router = express.Router();
const CommunicationCtrl = require("../../controllers/crms/CommunicationController");

const path = require("path");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/message_file")
  },
  filename: function (req, file, cb) {
    let filename = "";

    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage });

router.get("/contacts", CommunicationCtrl.getContacts);
router.get("/messages", CommunicationCtrl.getMessages);
router.post("/messages", CommunicationCtrl.saveMessage);
router.post('/message-file', upload.fields([{
  name: 'messageFile',
  maxCount: 10
}]), CommunicationCtrl.saveMessageFile);

module.exports = router;