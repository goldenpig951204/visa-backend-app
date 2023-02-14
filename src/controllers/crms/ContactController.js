// const User = require("../../models/User");
const Contact = require("../../models/Contact");

const fetch = async (req, res) => {
    let { search } = req.query;
    let contacts = await Contact.find({
        $or: [{
            subject: new RegExp(search, "i")
        }, {
            message: new RegExp(search, "i")
        }]
    }).sort({ createdAt: -1 });
    res.json(contacts);
}

const fetchById = async (req, res) => {
    try {
        let { id } = req.params;
        let contact = await Contact.findById(id);
        res.json(contact);
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
        await Contact.findByIdAndDelete(id);
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
    fetch,
    fetchById,
    remove
}