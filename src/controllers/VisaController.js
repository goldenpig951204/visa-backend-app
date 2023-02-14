const fs = require("fs");
const path = require("path");
const sharp = require("sharp");
const qrcode = require("qrcode");
const bwipjs = require("bwip-js");
var htmlToPdf = require("html-pdf-node");
const moment = require("moment");
const sgMail = require("@sendgrid/mail");
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);
// const twilio = require("twilio")(process.env.TWILIO_API_KEY, process.env.TWILIO_API_SECRET_KEY);
// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
const Setting = require("../models/Setting");
const Application = require("../models/Application");
const Transaction = require("../models/Transaction");
const VisaPrice = require("../models/VisaPrice");
const AgentVisaPrice = require("../models/AgentVisaPrice");
const TravelType = require("../models/TravelType");
const Logo = require("../models/Logo");

const getVisaPrices = async (req, res) => {
    let visaPrices = await VisaPrice.find().populate('visaType');
    res.json(visaPrices);
}

const getAgentVisaPrices = async (req, res) => {
    let { categoryId } = req.query;
    let agentVisaPrices = await AgentVisaPrice.find({ category: categoryId }).populate('visaType');
    res.json(agentVisaPrices);
}

const getTravelTypes = async (req, res) => {
    let travelTypes = await TravelType.find();
    res.json(travelTypes);
}

const create = async (req, res) => {
    try {
        let data = req.body;
        var fileKeys = Object.keys(req.files);
        var passportPhoto = [];
        var personalPhoto = [];
        for (field of fileKeys) {
            for (file of req.files[field]) {
                const { filename: image } = file;
                if (field === "passportPhoto[]") {
                    await sharp(file.path).resize(800, 600).jpeg({ quality: 90 }).toFile(path.resolve(file.destination, 'passport_photos', image));
                    passportPhoto.push(image);
                    fs.unlinkSync(file.path);
                } else if (field === "personalPhoto[]") {
                    await sharp(file.path).resize(400, 600).jpeg({ quality: 90 }).toFile(path.resolve(file.destination, "personal_photos", image));
                    personalPhoto.push(image);
                    fs.unlinkSync(file.path);
                }
            }
        }
        data["passportPhoto"] = passportPhoto;
        data["personalPhoto"] = personalPhoto;

        let persons = [];
        let amount = 0;
        for (let i = 0; i < data.firstName.length; i++) {
            let visaPrice = await VisaPrice.findOne({visaType: data.visaType[i]});
            amount += Number(visaPrice.price);
            let person = {
                firstName: data.firstName[i],
                lastName: data.lastName[i],
                fatherName: data.fatherName[i],
                birthday: data.birthday[i],
                nationality: data.nationality[i],
                phone: data.phone[i],
                prevNationality: data.prevNationality[i],
                email: data.email[i],
                occupation: data.occupation[i],
                visaType: data.visaType[i],
                travelType: data.travelType[i],
                passportNumber: data.passportNumber[i],
                visitedTimes: data.visitedTimes[i],
                issuedDate: data.issuedDate[i],
                expireDate: data.expireDate[i],
                personalPhoto: data.personalPhoto[i],
                passportPhoto: data.passportPhoto[i]
            }
            persons.push(person);
        }
        let application = await Application.create({
            amount: amount,
            persons: persons,
            isPaid: false
        });
        const setting = await Setting.findOne();
        const stripe = require("stripe")(setting.STRIPE_SECRET_KEY)

        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount * 100,
            currency: "usd",
            automatic_payment_methods: {
                enabled: true
            }
        });
        res.json({
            status: true,
            application: application,
            clientSecret: paymentIntent.client_secret
        });
    } catch (err) {
        res.json({
            status: false,
            msg: err.message
        });
    }

}
const order = async (req, res) => {
    try {
        let { id, orderNumber, } = req.body;
        let application = await Application.findByIdAndUpdate(id, {
            orderNumber: orderNumber,
            isPaid: true,
            status: "received"
        });
        // generate transaction
        await Transaction.create({
            orderId: orderNumber,
            firstName: application.persons[0].firstName,
            lastName: application.persons[0].lastName,
            email: application.persons.email,
            application: application._id,
            amount: application.amount
        });
        /***  send email to global user to read transaction **/
        // ~~~~~~~~~~~~~~~~~~~~~~~~
        /********************/
        //  qr code generate
        let qrcodeFileName = `qrcode_${Date.now()}.png`;
        await qrcode.toFile(`uploads/qrcodes/${qrcodeFileName}`, id);
        let barcodeFileName = `barcode_${Date.now()}.png`;
        let barcodeBuffer = await bwipjs.toBuffer({
            bcid: "code128",
            text: id,
            scale: 3,
            height: 10,
            includetext: false,
            textxalign: "center"
        });
        fs.writeFileSync(`uploads/barcodes/${barcodeFileName}`, barcodeBuffer);
        application = await Application.findById(id).populate(['persons.visaType', 'persons.travelType']);
        let logo = await Logo.findOne({ type: "email" });
        let persons = [];
        for (person of application.persons) {
            let pdfOptions = {format: "A4"}
            let htmlFile = {
                content: `
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta http-equiv="X-UA-Compatible" content="IE=edge">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>PDF</title>
                        <style>
                            * {font-family: Montserrat;}
                            .header {display: flex;justify-content: space-between;align-items: center;border-bottom: 2px solid #879196;position: relative;padding: 8px;}
                            .header .corp-map {position: absolute;left: calc(50% - 80px);width: 160px;height: 150px;z-index: 1;}
                            .header .left-header, .header .right-header {z-index: 2;}
                            .header .left-header .left-top-header {display: flex;justify-content: center;align-items: center;margin-bottom: 20px;}
                            .header .left-header .corp-logo {height: 62px;border: 1px solid #cccccc;margin-top: 2px;margin-right: 20px;}
                            .header .left-header h3.corp-brand {font-size: 22px;line-height: 1;color: #62686c;font-weight: 700;margin-top: 5px;margin-bottom: 5px;}
                            .header .left-header p {margin-top: 0;margin-bottom: 0;line-height: 1.2;font-weight: bold;color: #62686c;font-size: 18px;}
                            .header .left-header .left-bottom-header p {font-size: 22px;color: #000000;}
                            .header .right-header .qrcode {width: 140;height: 140px;border-radius: 14px;}
                            .content {padding: 15px 15px;}
                            .photo-section {display: flex;}
                            .photo-section .photo-wrapper {display: inline-block;}
                            .photo-section .photo-wrapper > .photo-wrap {display: inline-block;padding: 2px;border: 1px solid #000000;font-size: 0;}
                            .photo-section .photo-wrapper .passport-photo {width: 140px;height: 170px;}
                            .photo-section .photo-wrapper > .applicant-name {font-weight: bold;font-size: 20px;line-height: 22px;margin-bottom: 10px;}
                            .detail-section .detail-title {margin-bottom: 1rem;font-weight: bold;font-size: 20px;line-height: 22px;}
                            .detail-section table {border-collapse: collapse;width: 100%;border: 1px solid #EEEEEE;}
                            .detail-section table tr {border: 1px solid #EEEEEE;}
                            .detail-section table tr > td {font-size: 16px;line-height: 20px;padding: 8px;}
                            .detail-section table tr:nth-child(odd) {background-color: #EEEEEE;}
                            .detail-section table tr:nth-child(even) {background-color: #FAFAFA;}
                            .barcode-section {margin-top: 70px;margin-bottom: 5rem;}
                            .barcode-section > .barcode {width: 400px;height: 50px;margin-bottom: 15px;}
                            .barcode-section > .corp-name,.barcode-section > .created-time {font-size: 20px;line-height: 22px;margin-bottom: 5px;color: #2D2D2D;}
                            .footer {text-align: center;}
                        </style>
                    </head>
                    <body>
                        <div class="header">
                            <img src="${req.protocol}://${req.headers.host}/uploads/map.png" class="corp-map"/>
                            <div class="left-header">
                                <div class="left-top-header">
                                    <img class="corp-logo" src="${req.protocol}://${req.headers.host}/uploads/logos/${logo.image}" style="max-width: 140px; height: auto; margin-top: 25px;"/>
                                    <div><h3 class="corp-brand">Submitted Visa Application Form</h3></div>
                                </div>
                                <div class="left-bottom-header"><p>Date: ${moment().format("MM/DD/YYYY")}</p><p>Application ID: ${application._id}</p></div>
                            </div>
                            <div class="right-header"><img class="qrcode" src="${req.protocol}://${req.headers.host}/uploads/qrcodes/${qrcodeFileName}"/></div>
                        </div>
                        <div class="content">
                            <div class="photo-section">
                                <div class="photo-wrapper">
                                    <div class="photo-wrap"><img src="${req.protocol}://${req.headers.host}/uploads/personal_photos/${person.personalPhoto}" class="passport-photo"/></div>
                                    <div class="applicant-name">${person.firstName} ${person.lastName}</div>
                                </div>
                            </div>
                            <div class="detail-section">
                                <h4 class="detail-title">Application Details</h4>
                                <table>
                                    <tr><td>Name</td><td>${person.firstName}</td></tr>
                                    <tr><td>Family Name</td><td>${person.lastName}</td></tr>
                                    <tr><td>Father's Name</td><td>${person.fatherName}</td></tr>
                                    <tr><td>DOB</td><td>${moment(person.birthday).format("MM/DD/YYYY")}</td></tr>
                                    <tr><td>Travel Document Type</td><td>${person.travelType.name}</td></tr>
                                    <tr><td>Passport No</td><td>${person.passportNumber}</td></tr>
                                    <tr><td>Issue Date</td><td>${moment(person.issuedDate).format("MM/DD/YYYY")}</td></tr>
                                    <tr><td>Expire Date</td><td>${moment(person.expireDate).format("MM/DD/YYYY")}</td></tr>
                                    <tr><td>Type of Visa</td><td>${person.visaType.name}</td></tr>
                                </table>
                            </div>
                            <div class="barcode-section">
                                <img class="barcode" src="${req.protocol}://${req.headers.host}/uploads/barcodes/${barcodeFileName}"/>
                                <div class="created-time">${moment(application.createdAt).format("MM/DD/YYYY")}</div>
                            </div>
                        </div>
                        <div class="footer"><div class="application-id" style="font-size: 20px; color: #000000;">${application._id}</div></div>
                    </body>
                    </html>`
            }
            let output = await htmlToPdf.generatePdf(htmlFile, pdfOptions);
            let pdfFileName = `pdf_${Date.now()}.pdf`;
            fs.writeFileSync(`uploads/pdfs/${pdfFileName}`, output);
            persons.push({
                firstName: person.firstName,
                lastName: person.lastName,
                fatherName: person.fatherName,
                birthday: person.birthday,
                nationality: person.nationality,
                phone: person.phone,
                prevNationality: person.prevNationality,
                email: person.email,
                occupation: person.occupation,
                visaType: person.visaType,
                travelType: person.travelType,
                passportNumber: person.passportNumber,
                visitedTimes: person.visitedTimes,
                issuedDate: person.issuedDate,
                expireDate: person.expireDate,
                personalPhoto: person.personalPhoto,
                passportPhoto: person.passportPhoto,
                pdf: pdfFileName,
                note: person.note
            });
            let attachment = fs.readFileSync(`uploads/pdfs/${pdfFileName}`).toString("base64");

            let setting = await Setting.findOne();
            sgMail.setApiKey(setting.SENDGRID_API_KEY);
            await sgMail.send({
                to: person.email,
                from: setting.SENDGRID_USER,
                subject: "Your Application has been submitted successfully.",
                html: `
                    <div style="padding-top: 30px; padding-bottom: 30px;">
                        <div style="overflow: auto; padding: 10px 50px; background:rgba(223, 231, 233, 0.1)">
                            <div style="float:left; width: 60%; overflow: auto;">
                                <div style="float: left;">
                                    <h3 style="margin: 0px;">Submitted Visa Application Form</h3>
                                    <h4 style="margin-top: 20px; margin-bottom: 0px;">Date: ${moment().format("MM/DD/YYYY")}</h4>
                                    <h4 style="margin-top: 5px; margin-bottom: 5px;">Application ID: ${application._id}</h4>
                                </div> 
                                <div style="float: right; text-align: right;">
                                    <img src="${req.protocol}://${req.headers.host}/uploads/logos/${logo.image}" style="max-width: 250px; height: auto;"/>
                                </div>
                            </div>
                            <div style="float:right; width: 40%; text-align: right;"><img src="${req.protocol}://${req.headers.host}/uploads/map.png" style="height: 120px;"/></div>
                        </div>
                        <div style="padding: 20px 50px;">
                            <h3>Your Application <span style="background-color: #175593; color: #fafafa; display: inline-block; padding: 1px 3px;">${application._id}</span> has been submitted successfully.</h3>
                            <p>
                                Please find attached the application form or <br/>download your application through the following button
                            </p>
                            <div style="margin-top: 50px; text-align: center">
                                <a download href="${req.protocol}://${req.headers.host}/uploads/pdfs/${person.pdf}" style="background:#28A820; text-decoration: none; display: inline-block; font-weight: bold; border-radius: 8px; padding: 25px 50px; color: #fafafa; line-height: 0px; font-size: 18px; border: none ">Download</a>
                            </div>
                        </div>
                        <div style="margin-top: 20px;">
                            <div style="background: #175593; padding: 10px 40px; font-size: 20px; color: #fafafa">Please allow 10 days before tracking the progress of your application.</div>
                            <div style="padding: 20px 40px;">
                                <ul style="font-size: 20px; list-style: circle; font-weight: bold; line-height: 2.0;">
                                    <li>You will be automatically notified with status of your application through email.</li>
                                    <li>You can track your application using the Application ID provided in this email.</li>
                                    <li>You can also track your application using the QR Code and Barcode provided in PDF file.</li>
                                </ul>
                                <h4 style="font-size: 20px; margin-top: 50px; padding-left: 40px;">Thank you for using our service</h4>
                            </div>
                        </div>
                        <div style="overflow: auto;">
                            <img src="${req.protocol}://${req.headers.host}/uploads/logos/${logo.image}" style="float: left; max-width: 250px; height: auto; margin-right: 15px;"/>
                        </div>
                    </div>
                `,
                attachments: [{
                    content: attachment,
                    type: "application/pdf",
                    filename: "attachment.pdf",
                    disposition: "attachment"
                }]
            });
            if (person.country === "UK") {
                // SEND SMS
                const twilio = require("twilio")(setting.TWILIO_API_KEY, setting.TWILIO_API_SECRET_KEY);
                try {
                    await twilio.messages.create({
                        body: `
                            Your Visa Application ${application._id} has been submitted successfully, You wil receive an email shortly with details of your application, please allow 10 days before tracking your application.
                            Visa Application Form the following url. ${req.protocol}://${req.hostname}/uploads/pdfs/${pdfFileName}
                        `,
                        from: `+${setting.TWILIO_PHONE}`,
                        to: `${person.phone}`
                    });
                } catch (err) {
                    console.log(err.message);
                }
                // SEND WHATSAPP
                // result = await twilio.messages.create({
                //     body: `
                //         Your Visa Application ${application._id} has been submitted successfully, You wil receive an email shortly with details of your application, please allow 10 days before tracking your application.
                //         Visa Application Form / http://localhost:5000
                //     `,
                //     from: `whatsapp:${setting.TWILIO_WHATSAPP_PHONE}`,
                //     to: `whatsapp:+447470174216`
                // });
            }
        }
        await Application.findByIdAndUpdate(id, {persons: persons});
        res.json({
            status: true,
            msg: `Your Application has been submitted successfully. Please check your email.`
        });
    } catch (err) {
        res.json({
            status: false,
            msg: err.message
        });
    }
}
const cancel = async (req, res) => {
    let { id } = req.body;
    let application = await Application.findById(id);
    for (person of application.persons) {
        if (person.passportPhoto && fs.existsSync(`uploads/passport_photos/${person.passportPhoto}`)) {
            fs.unlinkSync(`uploads/passport_photos/${person.passportPhoto}`);
        }
        if (person.personalPhoto && fs.existsSync(`uploads/personal_photos/${person.personalPhoto}`)) {
            fs.unlinkSync(`uploads/personal_photos/${person.personalPhoto}`);
        }
    }
    await application.delete();
    res.json({
        status: true,
        msg: "Because you cancelled the payment transaction, the application was deleted automatically."
    })
}

const getApplication = async (req, res) => {
    let { id } = req.params;
    let application = await Application.findById(id);
    res.json(application);
}

module.exports = {
    getVisaPrices,
    getAgentVisaPrices,
    getTravelTypes,
    create,
    order,
    cancel,
    getApplication
}

