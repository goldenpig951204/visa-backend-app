const fs = require("fs");
const path = require("path");
const Logo = require("../../models/Logo");
// const Logo = require("../../models/Logo");

const create = async (req, res) => {
    try {
        let logo = await Logo.findOne({ type: req.body.type });

        if (logo) {
            if (fs.existsSync(`uploads/logos/${logo.image}`)) fs.unlinkSync(`uploads/logos/${logo.image}`);
            await logo.delete();
        }
        await Logo.create({ 
            type: req.body.type,
            image: req.file.filename
        });
        res.json({
            status: true,
            msg: "Successfully uploaded."
        });
    } catch (err) {
        res.json({
            status: false,
            msg: err.message
        });
    }
}

const fetch = async (req, res) => {
    let logos = await Logo.find();
    res.json(logos);
}

const fetchByType = async (req, res) => {
    let { type } = req.params;
    let logo = await Logo.findOne({ type: type });
    res.json(logo);
}

const remove = async (req, res) => {
    try {
        let logo = await Logo.findOne({ type: req.body.type });

        if (logo) {
            if (fs.existsSync(`uploads/logos/${logo.image}`)) fs.unlinkSync(`uploads/logos/${logo.image}`);
            await logo.delete();
            res.json({
                status: true,
                msg: "Successfully deleted."
            });
        } else {
            res.json({
                status: false,
                msg: "Please upload a logo."
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
    create,
    fetch,
    fetchByType,
    remove
}