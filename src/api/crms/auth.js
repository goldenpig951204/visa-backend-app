const express = require("express");
const router = express.Router();
const AuthCtrl = require("../../controllers/crms/AuthController");

router.post("/login", AuthCtrl.login);
router.get("/me", AuthCtrl.me);
router.put('/profile/:id', AuthCtrl.updateProfile);
router.put("/password/:id", AuthCtrl.changePassword);

module.exports = router;