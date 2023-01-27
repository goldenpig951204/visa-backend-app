const express = require("express");
const path = require("path");
const router = express.Router();
const multer = require("multer");
const applicationStorage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "uploads/")
    },
    filename: function(req, file, cb) {
        let filename = "";
        if (file.fieldname == "passportPhoto[]") {
            filename = "passport-photo";
        } else if (file.fieldname == "personalPhoto[]") {
            filename = "personal-photo";
        }
        cb(null, filename + '-' + Date.now() + path.extname(file.originalname));
    }
});
const attachStorage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "uploads/attachments/");
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const applicationUpload = multer({ storage: applicationStorage });
const attachUpload = multer({ storage: attachStorage });
const ApplicationCtrl = require("../../controllers/crms/ApplicationController");

router.get("/", ApplicationCtrl.fetch);
router.get("/:id", ApplicationCtrl.fetchById);
router.post("/", applicationUpload.fields([{
    name: "passportPhoto[]",
    maxCount: 10
}, {
    name: "personalPhoto[]",
    maxCount: 10
}]), ApplicationCtrl.create);
router.get("/:id/assign", ApplicationCtrl.getAssign);
router.put("/:id/assign", ApplicationCtrl.setAssign);
router.put("/:id", attachUpload.single('attach'), ApplicationCtrl.update);
router.delete("/:id", ApplicationCtrl.remove);

module.exports = router;