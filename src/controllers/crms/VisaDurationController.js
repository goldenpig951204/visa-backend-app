const VisaDuration = require("../../models/VisaDuration");

const fetch = async (req, res) => {
    let types = await VisaDuration.find();
    return res.json(types);
}

const create = async (req, res) => {
    try {
        let data = req.body;
        await VisaDuration.create(data);
        res.json({
            status: true,
            msg: "Successfully created."
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
        await VisaDuration.findByIdAndUpdate(id, data);
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
        await VisaDuration.findOneAndDelete({ visaType: id });
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