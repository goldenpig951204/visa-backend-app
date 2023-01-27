const bcrypt = require("bcrypt");
const User = require("../models/User");

const register = async (req, res) => {
    try {
        let agent = req.body;
        let salt = bcrypt.genSaltSync(10);
        agent.password = bcrypt.hashSync(agent.password, salt);
        let user = await User.findOne({ email: agent.email });
        if (user) {
            res.json({
                success: false,
                msg: "The email already exists."
            });
        } else {
            agent = await User.create(agent);
            res.json({
                success: true,
                msg: "Successfully registered, Please wait until the super admin allowed it."
            });
        }
    } catch (err) {
        res.json({
            success: false,
            msg: err.message
        });
    }
}

module.exports = {
    register
}