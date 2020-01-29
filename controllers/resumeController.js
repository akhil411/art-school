const db = require("../models");
const axios = require("axios");
const validateResumeInput = require("../validation/resume");
var nodemailer = require('nodemailer');

// Defining methods for the booksController
module.exports = {
    submit: function (req, res) {
        const { errors, isValid } = validateResumeInput(req.body);
        // Check validation
        if (!isValid) {
            return res.status(400).json(errors);
        }
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'akhilvijayan411@gmail.com',
              pass: 'Anukutty@00411'
            }
          });
        
        const toAddress = req.body.email;
        const name = req.body.name;
        
        var mailOptions = {
            from: 'akhilvijayan004@gmail.com',
            to: toAddress,
            subject: 'Akhil Vijayan sending Resume from The Bootcamp at The University of Sydney',
            text: 'Hi ' + name + ',\n\nThank you for taking the time to fill in the form for me to send my Resume.\nI have attached my Resume for your consideration. \n\n\n Thanks, \n Akhil Vijayan',
            attachments: [
                {
                    filename: 'Akhil_Vijayan_Resume.pdf',
                    path: 'https://akhil411.github.io/assets/Akhil-Vijayan-Resume.pdf'
                }
            ]
        };
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
        db.Resume
            .create({ name: req.body.name, email: req.body.email })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
}
