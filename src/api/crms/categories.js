const express = require("express");
const router = express.Router();
const CategoryCtrl = require("../../controllers/crms/CategoryController");

router.get("/", CategoryCtrl.fetch);
router.get("/:id", CategoryCtrl.fetchById);
router.post("/", CategoryCtrl.create);
router.put("/:id", CategoryCtrl.update);
router.delete("/:id", CategoryCtrl.remove);

module.exports = router;