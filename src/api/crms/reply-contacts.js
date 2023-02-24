const express = require("express");
const router = express.Router();
const ReplyContactController = require("../../controllers/crms/ReplyContactController");

router.post("/", ReplyContactController.create);
router.get("/", ReplyContactController.fetch);
router.get("/:id", ReplyContactController.fetchById);
router.put("/:id", ReplyContactController.update);
router.delete("/:id", ReplyContactController.remove);

module.exports = router;