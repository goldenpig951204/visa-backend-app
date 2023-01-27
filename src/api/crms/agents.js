const express = require("express");
const router = express.Router();
const AgentCtrl = require("../../controllers/crms/AgentController");

router.post("/", AgentCtrl.create);
router.get("/", AgentCtrl.fetch);
router.get("/:id", AgentCtrl.fetchById);
router.put("/:id", AgentCtrl.update);
router.delete("/:id", AgentCtrl.remove);

module.exports = router;