const express = require("express");
const router = express.Router();
const TransactionCtrl = require("../../controllers/crms/TransactionController");

router.get("/", TransactionCtrl.fetch);
router.get("/:id", TransactionCtrl.fetchById);
router.put("/:id", TransactionCtrl.update);
router.delete("/:id", TransactionCtrl.remove);

module.exports = router;