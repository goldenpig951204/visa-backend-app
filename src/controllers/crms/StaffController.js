const bcrypt = require("bcrypt");
const User = require("../../models/User");

const create = async (req, res) => {
    try {
        let staff = req.body;
        let salt = bcrypt.genSaltSync(10);
        staff.password = bcrypt.hashSync(staff.password, salt);
        let user = await User.findOne({ email: staff.email });
        if (user) {
            res.json({
                status: false,
                msg: "The email already exists."
            });
        } else {
            staff = await User.create({...staff, status: true});
            // send email
            res.json({
                status: true,
                msg: "Successfully registered."
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
    console.log(typeof search)
    let staffs = await User.find({
        $and: [{
            role: "staff"
        }, {
            $or: [{
                firstName: new RegExp(search, "i")
            }, {
                lastName: new RegExp(search, "i")
            }, {
                email: new RegExp(search, "i")
            }, {
                phone: new RegExp(search, "i")
            }, {
                status: search.toLowerCase() === "true"
            }]
        }]
    })
    res.json(staffs);
}

const fetchById = async (req, res) => {
    let { id } = req.params;
    let staff = await User.findById(id);
    res.json(staff);
}

const update = async (req, res) => {
    try {
        let { id } = req.params;
        let staff = req.body;
        if (staff.password !== undefined) {
            if (staff.password !== "") {
                let salt = bcrypt.genSaltSync(10);
                staff.password = bcrypt.hashSync(staff.password, salt);
            } else {
                delete staff.password;
            }
        }
        await User.findByIdAndUpdate(id, staff);
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