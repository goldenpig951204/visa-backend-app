const express = require("express");
const router = express.Router();
const OccupationItemsCtrl = require("../../controllers/crms/OccupationItemsController");

router.get("/", OccupationItemsCtrl.fetch);
router.post("/", OccupationItemsCtrl.create);
router.put("/:id", OccupationItemsCtrl.update);
router.delete("/:id", OccupationItemsCtrl.remove);

module.exports = router;