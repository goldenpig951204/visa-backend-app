const Category = require("../../models/Category");
const AgentVisaPrice = require("../../models/AgentVisaPrice");

const fetch = async (req, res) => {
    let categories = await Category.find().sort({name: 1});
    res.json(categories);
}

const fetchById = async (req, res) => {

}

const create = async (req, res) => {
    try {
        let data = req.body;
        await Category.create(data);
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
        await Category.findByIdAndUpdate(id, data);
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
        await Category.findByIdAndDelete(id);
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
    fetchById,
    create,
    update,
    remove
}