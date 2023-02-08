const mongoose = require("mongoose");
const AgentVisaPrice = require("./AgentVisaPrice");
const User = require("./User");

const CategorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

CategorySchema.pre("findOneAndDelete", async function(next) {
    let id = this._conditions._id;
    await AgentVisaPrice.deleteMany({category: id});
    await User.updateMany({
        category: id,
        role: "agent"
    }, {
        categrory: ""
    });
    next();
});

const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;