const fs = require("fs");
const path = require("path");
const Logo = require("../../models/Logo");
// const Logo = require("../../models/Logo");

const create = async (req, res) => {
    try {
        let { filename } = req.file;
        let imageUrl = filename;
        let logo = await Logo.findOne({});
        if (logo && fs.existsSync(`uploads/logos/${logo.imageUrl}`)) {
            fs.unlinkSync(`uploads/logos/${logo.imageUrl}`);
            await logo.delete();
        }
        await Logo.create({ 
            imageUrl: imageUrl
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
    let logo = await Logo.findOne({});
    res.json(logo);
}

const remove = async (req, res) => {
    try {
        let logo = await Logo.findOne({});
        if (logo && fs.existsSync(`uploads/logos/${logo.imageUrl}`)) {
            fs.unlinkSync(`uploads/logos/${logo.imageUrl}`);
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
    remove
}