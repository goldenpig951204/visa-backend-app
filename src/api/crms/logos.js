const express = require("express");
const path = require("path");
const router = express.Router();
const multer = require("multer");
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "uploads/logos")
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage});
const LogoCtrl = require("../../controllers/crms/LogoController");

router.post("/", upload.single("logo"), LogoCtrl.create);
router.get("/", LogoCtrl.fetch);
router.get("/:type", LogoCtrl.fetchByType);
router.delete("/", LogoCtrl.remove);

module.exports = router;