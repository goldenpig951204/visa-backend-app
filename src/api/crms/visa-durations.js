const express = require("express");
const router = express.Router();
const VisaDurationCtrl = require("../../controllers/crms/VisaDurationController");

router.get("/", VisaDurationCtrl.fetch);
router.post("/", VisaDurationCtrl.create);
router.put("/:id", VisaDurationCtrl.update);
router.delete("/:id", VisaDurationCtrl.remove);

module.exports = router;