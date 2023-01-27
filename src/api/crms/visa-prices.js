const express = require("express");
const router = express.Router();
const VisaPriceCtrl = require("../../controllers/crms/VisaPriceController");

router.post("/", VisaPriceCtrl.create);
router.get("/", VisaPriceCtrl.fetch);
router.get("/:id", VisaPriceCtrl.fetchById);
router.put("/:id", VisaPriceCtrl.update);
router.delete("/:id", VisaPriceCtrl.remove);

module.exports = router;