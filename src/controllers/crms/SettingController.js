const Setting = require("../../models/Setting");

const update = async (req, res) => {
    try {
        let setting = req.body;
        await Setting.findOneAndUpdate(null, setting, {
            upsert: true
        });
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

const fetch = async (req, res) => {
    let setting = await Setting.findOne(null);
    res.json(setting);
}

module.exports = {
    fetch,
    update
}