const Setting = require("../../models/Setting");
const Contact = require("../../models/Contact");
const ReplyContact = require("../../models/ReplyContact");

const sgMail = require("@sendgrid/mail");

const create = async (req, res) => {
    try {
        let data = req.body;
        let result = await ReplyContact.create(data);
        let setting = await Setting.findOne();
        sgMail.setApiKey(setting !== null && setting.SENDGRID_API_KEY ? setting.SENDGRID_API_KEY : process.env.SENDGRID_API_KEY);
        let contact = await Contact.findById(data.contact);

        await sgMail.send({
            to: contact.email,
            from: setting !== null && setting.SENDGRID_USER ? setting.SENDGRID_USER : process.env.SENDGRID_USER,
            subject: "➥" + contact.subject,
            html: `<div>${data.message}</div>`
        });
        res.json({
            status: true,
            msg: "Successfully created.",
            result
        });
    } catch (err) {
        res.json({
            status: false,
            msg: err.message
        });
    }

}

const fetch = async (req, res) => {
    let replyContacts = await ReplyContact.find();
    res.json(replyContacts);
}

const fetchById = async (req, res) => {
    let { id } = req.params;
    let replyContact = await ReplyContact.findById(id);
    res.json(replyContact);
}

const update = async (req, res) => {
    try {
        let { id } = req.params;
        let data = req.body;
        let result = await ReplyContact.findByIdAndUpdate(id, data);
        res.json({
            status: true,
            result,
            msg: "Successfully updated."
        });
    } catch (err) {
        res.json({
            status: false,
            msg: err.message
        });
    }
}

const remove = async (req, res) => {
    try {
        let { id } = req.params;
        await ReplyContact.findByIdAndDelete(id);
        res.json({
            status: true,
            msg: "Successfully deleted."
        });
    } catch (err) {
        res.json({
            status: false,
            msg: err.message
        });
    }
}

module.exports = {
    create,
    fetch,
    fetchById,
    update,
    remove
}
