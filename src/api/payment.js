const express = require('express');
const router = express.Router();
const PaymentCtrl = require("../controllers/PaymentController");

router.post('/payment-intent', PaymentCtrl.createPaymentIntent);

module.exports = router;
