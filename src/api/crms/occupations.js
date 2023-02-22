const express = require("express");
const router = express.Router();
const OccupationCtrl = require("../../controllers/crms/OccupationController");

router.get("/", OccupationCtrl.fetch);
router.post("/", OccupationCtrl.create);
router.put("/:id", OccupationCtrl.update);
router.delete("/:id", OccupationCtrl.remove);

module.exports = router;