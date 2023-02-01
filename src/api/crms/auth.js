const express = require("express");
const path = require("path");
const router = express.Router();
const AuthCtrl = require("../../controllers/crms/AuthController");
const multer = require("multer");

const avatarStorage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "uploads/avatars/")
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
})

const avatarUpload = multer({ storage: avatarStorage });

router.post("/login", AuthCtrl.login);
router.get("/me", AuthCtrl.me);
router.put('/profile/:id', avatarUpload.single('avatar'), AuthCtrl.updateProfile);
router.put("/password/:id", AuthCtrl.changePassword);

module.exports = router;