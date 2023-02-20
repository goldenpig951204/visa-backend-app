const OccupationItems = require("../../models/OccupationItems");

const fetch = async (req, res) => {
    let types = await OccupationItems.find();
    return res.json(types);
}

const create = async (req, res) => {
    try {
        let data = req.body;
        console.log('temp :>> ', data);
        await OccupationItems.create(data);
        res.json({
            status: true,
            msg: "Successfully created."
        });
    } catch (err) {
        const temp =
            res.json({
                status: false,
                msg: err.message
            });
        console.log(err.message);
    }
}

const update = async (req, res) => {
    try {
        let { id } = req.params;
        let data = req.body;
        await OccupationItems.findByIdAndUpdate(id, data);
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
        await OccupationItems.findOneAndDelete({ visaType: id });
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
    create,
    update,
    remove
}