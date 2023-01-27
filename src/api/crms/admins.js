const express = require("express");
const router = express.Router();
const AdminCtrl = require("../../controllers/crms/AdminController");

router.post("/", AdminCtrl.create);
router.get("/", AdminCtrl.fetch);
router.get("/:id", AdminCtrl.fetchById);
router.put("/:id", AdminCtrl.update);
router.delete("/:id", AdminCtrl.remove);

module.exports = router;