const express = require("express");
const router = express.Router();
const AgentVisaPriceCtrl = require("../../controllers/crms/AgentVisaPriceController");

router.post("/", AgentVisaPriceCtrl.create);
router.get("/", AgentVisaPriceCtrl.fetch);
router.get("/:id", AgentVisaPriceCtrl.fetchById);
router.put("/:id", AgentVisaPriceCtrl.update);
router.delete("/:id", AgentVisaPriceCtrl.remove);

module.exports = router;