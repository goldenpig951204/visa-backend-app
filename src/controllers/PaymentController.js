const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

const createPaymentIntent = async (req, res) => {
    let { amount } = req.body;
    const paymentIntent = await stripe.paymentIntents.create({
        amount: amount,
        currency: "gbp",
        automatic_payment_methods: {
            enabled: true
        }
    });
    console.log("ClientSecret====>", clientSecret);
    res.json({
        clientSecret: paymentIntent.client_secret
    });
}

module.exports = {
    createPaymentIntent
}