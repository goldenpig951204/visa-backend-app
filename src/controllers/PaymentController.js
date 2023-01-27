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
    res.json({
        clientSecret: paymentIntent.client_secret
    });
}

module.exports = {
    createPaymentIntent
}