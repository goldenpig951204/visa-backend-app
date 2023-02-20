const User = require("../../models/User");
const Communication = require("../../models/Communication");

const getContacts = async (req, res) => {
    let { id } = req.query;
    let user = await User.findById(id);
    let users = [], contacts = [];
    if (user.role === "admin") {
        // users = await User.find({ role: "agent", status: true });
        users = await User.find({
            $and: [{
                status: true
            }, {
                $or: [{
                    role: "agent"
                }, {
                    role: "staff"
                }]
            }]
        });
    } else {
        users = await User.find({ role: "admin", status: true });
    }
    for (sender of users) {
        let cnt = await Communication.find({ user: sender._id, sender: user._id, isSeen: false }).count();
        contacts.push({
            _id: sender._id,
            firstName: sender.firstName,
            lastName: sender.lastName,
            email: sender.email,
            role: sender.role,
            unSeenCount: cnt
        });
    }
    res.json(contacts);
}

const getMessages = async (req, res) => {
    try {
        let { user, sender } = req.query;
        console.log('req.query :>> ', req.query);
        await Communication.updateMany({
            user: sender,
            sender: user,
            isSeen: false
        }, {
            isSeen: true
        });
        let messages = await Communication.find({
            $or: [
                {
                    user: user,
                    sender: sender
                }, {
                    user: sender,
                    sender: user
                }]
        }).populate(["user", "sender"]);
        res.json({
            status: true,
            messages: messages
        });
    } catch (err) {
        res.json({
            status: false,
            msg: err.message
        });
    }
}

const saveMessage = async (req, res) => {
    try {
        let message = await Communication.create(req.body);
        message = await Communication.findById(message._id).populate(["user", "sender"]);
        res.json({
            status: true,
            message: message
        });
    } catch (err) {
        res.json({
            status: false,
            msg: err.message
        });
    }
}

const saveMessageFile = async (req, res) => {
    try {
        let files = req.files.messageFile;
        let fileName = '';
        if (files) fileName = files[0].filename;

        let message = await Communication.create({
            ...req.body, fileName
        });
        message = await Communication.findById(message._id).populate(["user", "sender"]);
        res.json({
            status: true,
            message: message
        });
        console.log('messagecontroller-req =======>:>> ', message);
    }
    catch (err) {
        res.json({
            status: false,
            msg: err.message
        });
    }

}

module.exports = {
    getContacts,
    getMessages,
    saveMessage,
    saveMessageFile
}