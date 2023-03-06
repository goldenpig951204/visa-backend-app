const mongoose = require("mongoose");
const AgentVisaPrice = require("../../models/AgentVisaPrice");

const fetch = async (req, res) => {
    let { search, categoryId } = req.query;
    let prices = await AgentVisaPrice.aggregate([{
        $lookup: {
            from: 'visatypes',
            localField: 'visaType',
            foreignField: '_id',
            as: 'visa',
            pipeline: [{
                $lookup: {
                    from: "visadurations",
                    localField: "stay_duration",
                    foreignField: "_id",
                    as: "stay_duration"
                }
            }]
        },
    }, {
        $match: {
            $and: [{
                category: mongoose.Types.ObjectId(categoryId)
            }, {
                $or: [{
                    price: { $gt: Number(search) - 1, $lt: Number(search) + 1 }
                }, {
                    'visa.name': new RegExp(search, "i")
                }]
            }]
        }
    }]);
    res.json(prices);
}

const fetchById = async (req, res) => {
    let { id } = req.params;
    let price = await AgentVisaPrice.findById(id);
    res.json(price);
}

const create = async (req, res) => {
    try {
        let { visaType, category, nationalities, price } = req.body;
        let status = 0;
        for (let nationality of nationalities) {
            console.group(visaType, category, nationality);
            let cnt = await AgentVisaPrice.countDocuments({ visaType: visaType, category: category, nationality: nationality });
            console.log(cnt);
            if (cnt > 0) status++;
        }
        if (status == 0) {
            for (let nationality of nationalities) {
                await AgentVisaPrice.create({
                    visaType,
                    category,
                    nationality,
                    price
                });
            }
            res.json({
                status: true,
                msg: "The visa price is assiend successfully."
            });
        } else {
            res.json({
                status: false,
                msg: "The type of visa or nationality is duplicated."
            });
        }
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
        let price = req.body;
        let result = await AgentVisaPrice.findByIdAndUpdate(id, price);
        res.json({
            status: true,
            msg: "Successfully updated.",
            data: result
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
        await AgentVisaPrice.findByIdAndDelete(id);
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