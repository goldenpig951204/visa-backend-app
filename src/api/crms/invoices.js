const express = require("express");
const router = express.Router();
const InvoiceCtrl = require("../../controllers/crms/InvoiceController");

router.post("/", InvoiceCtrl.create);
router.get("/", InvoiceCtrl.fetch);
router.get("/get-agents", InvoiceCtrl.getAgents);
router.get("/:id", InvoiceCtrl.fetchById);
router.put("/:id", InvoiceCtrl.update);
router.delete("/:id", InvoiceCtrl.remove);

module.exports = router;