const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const User = require("../models/User");
const VisaType = require("../models/VisaType");
const TravelType = require("../models/TravelType");

const connect = (dbUrl) => {
    mongoose.connect(dbUrl, {
        logger: process.env.NODE_ENV === "development",
        serverSelectionTimeoutMS: 5000,
        dbName: "visa_booking"
    });
    mongoose.connection.on("connected", () => {
        console.log(`Database was connected successfully! ===>: ${dbUrl}`);

    });
}

const seedDB = async () => {
    let userCnts = await User.countDocuments();
    if (userCnts < 1) {
        let salt = bcrypt.genSaltSync(10);
        let seedUsers = [{
            firstName: "John",
            lastName: "Doe",
            email: "superadmin@gmail.com",
            password: bcrypt.hashSync("admin123!@#", salt),
            status: true,
            role: "super_admin"
        }];
        await User.insertMany(seedUsers);
    }

    let visaTypeCnts = await VisaType.countDocuments();
    if (visaTypeCnts < 1) {
        let seedVisaTypes = [{
            name: "Express VIP Visa - 7 Working Days - 45 days"
        }, {
            name: "Ordinary Visa - 2 Weeks - 45 days"
        }, {
            name: "Treatment Express Visa - 1 Week - 30 days"
        }, {
            name: "Treatment Ordinary Visa - 2 Weeks - 30 days"
        }, {
            name: "Authorisation Code - 3/5 Working Days - 30 days"
        }, {
            name: "Authorisation Code - 3/5 Working Days - 45 days"
        }];
        await VisaType.insertMany(seedVisaTypes);
    }

    let travelTypeCnts = await TravelType.countDocuments();
    if (travelTypeCnts < 1) {
        let seedTravelTypes = [{
            name: "Ordinary Passport"
        }, {
            name: "Travel Document"
        }, {
            name: "Diplomatic Passport"
        }, {
            name: "Service Passport"
        }];
        await TravelType.insertMany(seedTravelTypes);
    }
}

module.exports = {
    connect,
    seedDB
}