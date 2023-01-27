const VisaType = require("../../models/VisaType");

const fetch = async (req, res) => {
    let types = await VisaType.find();
    return res.json(types);
}
module.exports = {
    fetch
}