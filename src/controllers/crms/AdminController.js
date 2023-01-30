const bcrypt = require("bcrypt");
const User = require("../../models/User");

const create = async (req, res) => {
    try {
        let admin = req.body;
        let salt = bcrypt.genSaltSync(10);
        admin.password = bcrypt.hashSync(admin.password, salt);
        let user = await User.findOne({ email: admin.email });
        if (user) {
            res.json({
                status: false,
                msg: "The email already exists."
            });
        } else {
            admin = await User.create({...admin, status: true});
            // send email
            res.json({
                status: true,
                msg: "Successfully registered, Please check your email."
            });
        }
    } catch (err) {
        res.json({
            status: false,
            msg: err.message
        });
    }
}

const fetch = async (req, res) => {
    let { search } = req.query;
    let admins = await User.find({
        $and: [{
            role: "admin"
        }, {
            $or: [{
                firstName: new RegExp(search, "i")
            }, {
                lastName: new RegExp(search, "i")
            }, {
                email: new RegExp(search, "i")
            }, {
                phone: new RegExp(search, "i")
            }]
        }]
    })
    res.json(admins);
}

const fetchById = async (req, res) => {
    let { id } = req.params;
    let admin = await User.findById(id);
    res.json(admin);
}

const update = async (req, res) => {
    try {
        let { id } = req.params;
        let admin = req.body;
        if (admin.password !== undefined) {
            if (admin.password !== "") {
                let salt = bcrypt.genSaltSync(10);
                admin.password = bcrypt.hashSync(admin.password, salt);
            } else {
                delete admin.password;
            }
        }
        await User.findByIdAndUpdate(id, admin);
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
    try {
        let { id } = req.params;
        await User.findByIdAndDelete(id);
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