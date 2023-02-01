const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../../models/User");

const login = async (req, res) => {
    try {
        let { email, password } = req.body;
        let user = await User.findOne({ email });
        if (!user) {
            res.json({
                status: false,
                msg: "The user registered with the email does not exist."
            });
        } else if (!bcrypt.compareSync(password, user.password)) {
            res.json({
                status: false,
                msg: "The password does not match."
            });
        } else {
            if (!user.status) {
                res.json({
                    status: false,
                    msg: "Please wait for your administrator to allow this account."
                });
            } else {
                let token = jwt.sign({
                    user_id: user._id,
                    email: user.email,
                    role: user.role
                }, "a1A!s2S@d3D#f4F$", {
                    expiresIn: "24h"
                });
                res.json({
                    status: true,
                    userData: user,
                    accessToken: token,
                    msg: "Successfully logged in."
                });
            }
        }
    } catch (err) {
        res.json({
            status: false,
            msg: err.message
        });
    }
}

const me = async (req, res) => {
    let token = req.headers.authorization;
    jwt.verify(token, "a1A!s2S@d3D#f4F$", async (err, user) => {
        if (err) {
            return res.sendStatus(401);
        }
        let userData = await User.findById(user.user_id);
        res.json({userData});
    });
}
const updateProfile = async (req, res) => {
    try {
        let { id } = req.params;
        let data = req.body;
        if (req.file) data["avatar"] = req.file.filename;
        await User.findByIdAndUpdate(id, data);
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
const changePassword = async (req, res) => {
    try {
        let { id } = req.params;
        let { currentPassword, newPassword } = req.body;
        let user = await User.findById(id);
        if (bcrypt.compareSync(currentPassword, user.password)) {
            let salt = bcrypt.genSaltSync(10);
            let password = bcrypt.hashSync(newPassword, salt);
            await user.update({password: password});
            res.json({
                status: true,
                msg: "Successfully changed."
            });
        } else {
            res.json({
                status: false,
                msg: "Old password is incorrect."
            });
        }
    } catch (err) {
        res.json({
            status: false,
            msg: err.message
        });
    }
}

module.exports = {
    login,
    me,
    updateProfile,
    changePassword
}