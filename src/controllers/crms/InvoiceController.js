const User = require("../../models/User");
const Application = require("../../models/Application");
const Invoice = require("../../models/Invoice");

const fetch = async (req, res) => {
    let { id, role, isPaid, startDate, endDate, search } = req.query;
    let invoices = [];
    let conds = {}
    let match = {}
    if (isPaid) conds.status = isPaid;
    if (startDate) conds.issuedDate = { $lte: endDate }
    if (endDate) conds.dueDate = { $gte: startDate }
    if (search) match.$or = [{
        firstName: new RegExp(search, "i")
    }, {
        lastName: new RegExp(search, "i")
    }]
    if (role === "agent") {
        conds.agent = id;
        invoices = await Invoice.find(conds).populate([{
            path: "agent",
            match: match
         }, {
            path: "applications"
        }]);
        invoices = invoices.filter(invoice => invoice.agent !== null);
    } else {
        invoices = await Invoice.find(conds).populate([{
            path: "agent",
            match: match
        }, {
            path: "applications"
        }]);
        invoices = invoices.filter(invoice => invoice.agent !== null)
    }
    res.json(invoices);
}

const getAgents = async (req, res) => {
    let agents = await User.find({
        role: "agent"
    }).lean();
    for(let i = 0; i < agents.length; i++) {
        let applications = await Application.find({
            by: "agent",
            agent: agents[i]._id,
            isPaid: false
        });
        agents[i]["applications"] = applications;
    }
    res.json(agents);
}

const fetchById = async (req, res) => {

}

const create = async (req, res) => {
    try {
        let invoice = req.body;
        await Invoice.create(invoice);
        // start send email
        // ~~~~~~~~~~~~~~~~~
        // end send email
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
        let invoice = req.body;
        await Invoice.findByIdAndUpdate(id, invoice);
        // send email
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
        await Invoice.findByIdAndDelete(id);
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
    getAgents,
    fetchById,
    create,
    update,
    remove
}