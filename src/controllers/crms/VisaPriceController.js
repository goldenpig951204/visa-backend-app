const mongoose = require("mongoose");
const VisaPrice = require("../../models/VisaPrice");

const create = async (req, res) => {
    try {
        let { visaType, nationalities, price } = req.body;
        let status = 0;
        for (let nationality of nationalities) {
            let cnt = await VisaPrice.countDocuments({ visaType: visaType, nationality: nationality });
            if (cnt > 0) status++;
        }
        if (status == 0) {
            for (let nationality of nationalities) {
                await VisaPrice.create({
                    visaType,
                    nationality,
                    price
                });
            }
            res.json({
                status: true,
                msg: "The visa price is assigned successully."
            })
        } else {
            res.json({
                status: false,
                msg: "The type of visa or Nationality is duplicated."
            });
        }
    } catch (err) {
        res.json({
            status: false,
            msg: err.message
        });
    }
}

const fetch = async (req, res) => {
    let { search } = req.query;
    let prices = await VisaPrice.aggregate([{
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
            $or: [{
                price: { $gt: Number(search) - 1, $lt: Number(search) + 1 }
            }, {
                'visa.name': new RegExp(search, "i")
            }]
        }
    }]);
    res.json(prices);
}

const fetchById = async (req, res) => {
    let { id } = req.params;
    let price = await VisaPrice.findById(id);
    res.json(price);
}

const fetchByDuration = async (req, res) => {
    let { id } = req.params;
    let prices = await VisaPrice.aggregate([{
        $lookup: {
            from: 'visatypes',
            localField: 'visaType',
            foreignField: '_id',
            as: 'visa'
        }
    }, {
        $match: {
            "visa.stay_duration": mongoose.Types.ObjectId(id),
            "nationality": "default"
        }
    }]);
    res.json(prices);
}

const update = async (req, res) => {
    try {
        let { id } = req.params;
        let price = req.body;
        let result = await VisaPrice.findByIdAndUpdate(id, price);
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
        await VisaPrice.findByIdAndDelete(id);
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
    fetchByDuration,
    update,
    remove
}