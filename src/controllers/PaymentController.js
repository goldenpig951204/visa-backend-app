const Setting = require("../models/Setting");


const createPaymentIntent = async (req, res) => {
    let { amount } = req.body;
    const setting = await Setting.findOne();
    const stripe = require("stripe")(setting.STRIPE_SECRET_KEY);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: amount,
        currency: "gbp",
        automatic_payment_methods: {
            enabled: true
        }
    });
    res.json({
        clientSecret: paymentIntent.client_secret
    });
}

module.exports = {
    createPaymentIntent
}