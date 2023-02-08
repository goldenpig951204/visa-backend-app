const express = require("express");
const router = express.Router();
const AnnouncementCtrl = require("../../controllers/crms/AnnouncementCtrl");

router.get("/", AnnouncementCtrl.fetch);
router.get("/get-unread-counts", AnnouncementCtrl.getUnreadCounts);
router.get("/:id", AnnouncementCtrl.fetchById);
router.post("/", AnnouncementCtrl.create);
router.put("/:id", AnnouncementCtrl.update);
router.delete("/:id", AnnouncementCtrl.remove);

module.exports = router;