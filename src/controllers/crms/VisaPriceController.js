const VisaPrice = require("../../models/VisaPrice");

const create = async (req, res) => {
    try {
        let isExist = await VisaPrice.countDocuments({ visaType: req.body.visaType });
        if (isExist) {
            res.json({
                status: false,
                msg: "The visa has already been assigned a price."
            });
        } else {
            await VisaPrice.create(req.body);
            res.json({
                status: true,
                msg: "The visa price is assigned successully."
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
            as: 'visa'
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
    update,
    remove
}