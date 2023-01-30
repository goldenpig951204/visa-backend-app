const VisaType = require("../../models/VisaType");
const VisaPrice = require("../../models/VisaPrice");
const AgentVisaPrice = require("../../models/AgentVisaPrice");

const fetch = async (req, res) => {
    let types = await VisaType.find();
    return res.json(types);
}

const create = async (req, res) => {
    try {
        let data = req.body;
        await VisaType.create(data);
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
        await VisaType.findByIdAndUpdate(id, data);
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
        await VisaPrice.findOneAndDelete({ visaType: id });
        await AgentVisaPrice.findOneAndDelete({ visaType: id });
        await VisaType.findByIdAndDelete(id);
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