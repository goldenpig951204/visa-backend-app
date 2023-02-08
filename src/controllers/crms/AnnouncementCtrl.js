const User = require("../../models/User");
const Announcement = require("../../models/Announcement");

const fetch = async (req, res) => {
    let { userId, search } = req.query;
    let user = await User.findById(userId);
    let announcements = [];
    if (user.role == "super_admin" || user.role == "admin") {
        announcements = await Announcement.find({
            $or: [{
                title: new RegExp(search, "i")
            }, {
                content: new RegExp(search, "i")
            }]
        }).sort({ createdAt: -1 }).populate({
            path: "users",
            match: {
             _id: userId
            } 
         });
    } else {
        announcements = await Announcement.find({
            $and: [{
                type: user.role
            }, {
                $or: [{
                    title: new RegExp(search, "i")
                }, {
                    content: new RegExp(search, "i")
                }]
            }]

        }).sort({ createdAt: -1 }).populate({
            path: "users",
            match: {
             _id: userId
            } 
         });
    }
    res.json(announcements);
}

const fetchById = async (req, res) => {
    let { id } = req.params;
    let { userId } = req.query;
    let user = await User.findById(userId);
    let announcement = await Announcement.findById(id);
    if (user.role === "agent" || user.role === "staff") {
        if (!announcement.users.includes(userId)) {
            announcement.users.push(userId);
            await announcement.save();
        }
    }
    res.json(announcement);
}

const getUnreadCounts = async (req, res) => {
    let { userId } = req.query;
    let user = await User.findById(userId);
    let counts = 0;
    if (user.role === "staff" || user.role === "agent") {
        counts = await Announcement.find({
            type: user.role,
            users: { $nin: user._id }
        }).count();
    }
    res.json(counts);
}

const create = async (req, res) => {
    try {
        let data = req.body;
        await Announcement.create(data);
        res.json({
            status: true,
            msg: "Successfully created"
        });
    } catch (err) {
        res.json({
            status: false,
            msg: err.message
        });
    }
}

const update = async (req, res) => {
    try {
        let { id } = req.params;
        let data = req.body;
        await Announcement.findByIdAndUpdate(id, data);
        res.json({
            status: true,
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
    let { id } = req.params;

}

module.exports = {
    fetch,
    fetchById,
    getUnreadCounts,
    create,
    update,
    remove
}