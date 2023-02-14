const sgMail = require("@sendgrid/mail");
const Contact = require("../models/Contact");
const Setting = require("../models/Setting");

const save = async (req, res) => {
    try {
        let mail = req.body.mailInfo;
        let setting = await Setting.findOne();
        sgMail.setApiKey(setting.SENDGRID_API_KEY);

        await sgMail.send({
            to: "info@irvisa.online",
            from: setting.SENDGRID_USER,
            subject: mail.subject,
            html: `<div>
                <div style="margin-bottom: 15px;">${mail.message}</div>
                <p style="text-align: right">From ${mail.email}</p>
            </div>`
        });
        await Contact.create(mail);
        res.json({
            status: true,
            msg: "Successfully sent."
        });
    } catch(err) {
        res.json({
            status: false,
            msg: err.message
        });
    }
}

module.exports = {
    save
}