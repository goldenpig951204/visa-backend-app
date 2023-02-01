const express = require('express');
const path = require("path");
const router = express.Router();
const multer = require("multer");
const storage = multer.diskStorage({
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
const upload = multer({ storage });
const VisaCtrl = require("../controllers/VisaController");

router.get('/visa-prices', VisaCtrl.getVisaPrices);
router.get('/agent-visa-prices', VisaCtrl.getAgentVisaPrices);
router.get('/travel-types', VisaCtrl.getTravelTypes);
router.post('/', upload.fields([{
    name: 'passportPhoto[]',
    maxCount: 10
}, {
    name: 'personalPhoto[]',
    maxCount: 10
}]), VisaCtrl.create);

router.post('/order', VisaCtrl.order);
router.post('/cancel', VisaCtrl.cancel);
router.get('/applications/:id', VisaCtrl.getApplication);
module.exports = router;
