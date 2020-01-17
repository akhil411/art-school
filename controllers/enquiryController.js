const db = require("../models");
const axios = require("axios");
const validateEnquiryInput = require("../validation/enquiry");
const moment = require("moment-timezone");

// Defining methods for the booksController
module.exports = {
    submit: function (req, res) {
        const { errors, isValid } = validateEnquiryInput(req.body);
        // Check validation
        if (!isValid) {
            return res.status(400).json(errors);
        }
        var now = moment();
        var creatednow = now.tz('Australia/Sydney').format('MMMM Do YYYY, h:mm a');
        db.Enquiry
            .create({ name: req.body.name, email: req.body.email, contactNumber: req.body.contactNumber, subject: req.body.subject, description: req.body.description, created: creatednow })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findAll: function (req, res) {
        db.Enquiry
            .find(req.query)
            .sort({ createdAt: 'desc' })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
}
