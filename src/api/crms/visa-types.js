const express = require("express");
const router = express.Router();
const VisaTypeCtrl = require("../../controllers/crms/VisaTypeController");

router.get("/", VisaTypeCtrl.fetch);
router.post("/", VisaTypeCtrl.create);
router.put("/:id", VisaTypeCtrl.update);
router.delete("/:id", VisaTypeCtrl.remove);

module.exports = router;