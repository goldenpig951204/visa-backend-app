const bcrypt = require("bcrypt");
const User = require("../../models/User");

const create = async (req, res) => {
    try {
        let agent = req.body;
        let salt = bcrypt.genSaltSync(10);
        agent.password = bcrypt.hashSync(agent.password, salt);
        let user = await User.findOne({ email: agent.email });
        if (user) {
            res.json({
                status: false,
                msg: "The email already exists."
            });
        } else {
            agent = await User.create({...agent, status: true});
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
    let agents = await User.find({ 
        $and: [{
            role: "agent" 
        }, {
            $or: [{
                firstName: new RegExp(search, "i")
            }, {
                lastName: new RegExp(search, "i")
            }, {
                corpName: new RegExp(search, "i")
            }, {
                email: new RegExp(search, "i")
            }, {
                phone: new RegExp(search, "i")
            }]
        }]
    });
    res.json(agents);
}

const fetchById = async (req, res) => {
    let { id } = req.params;
    let agent = await User.findById(id);
    res.json(agent);
}

const update = async (req, res) => {
    try {
        let { id } = req.params;
        let agent = req.body;
        if (agent.password !== undefined) {
            if (agent.password !== "") {
                let salt = bcrypt.genSaltSync(10);
                agent.password = bcrypt.hashSync(agent.password, salt);
            } else {
                delete agent.password;
            }
        }
        await User.findByIdAndUpdate(id, agent);
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