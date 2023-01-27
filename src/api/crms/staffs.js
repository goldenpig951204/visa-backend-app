const express = require("express");
const router = express.Router();
const StaffCtrl = require("../../controllers/crms/StaffController");

router.post("/", StaffCtrl.create);
router.get("/", StaffCtrl.fetch);
router.get("/:id", StaffCtrl.fetchById);
router.put("/:id", StaffCtrl.update);
router.delete("/:id", StaffCtrl.remove);

module.exports = router;