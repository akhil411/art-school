const db = require("../models");
const axios = require("axios");
const validateReportsInput = require("../validation/reports");

// Defining methods for the booksController
module.exports = {
    create: function(req, res) {
        console.log(req.body)
        const { errors, isValid } = validateReportsInput(req.body);

        // Check validation
        if (!isValid) {
            return res.status(400).json(errors);
        }
        db.Reports
          .create({ subject: req.body.subject, marks:req.body.marks, comments:req.body.marks, teacherId:req.body.teacherId, studentId:req.body.studentId })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      
    },
    getReports: function(req, res) {
      db.Reports
        .find({teacherId: req.params.id})
        .populate({path:'teacherId', model:User})
        .populate({path:'studentId', model:User})
        .sort({ createdAt: 'desc' })
        .then(dbModel => {
          res.json(dbModel)})
        .catch(err => res.status(422).json(err));  
    },
    remove: function(req, res) {
        db.Reports
          .findById({ _id: req.params.id })
          .then(dbModel => dbModel.remove())
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    getStudentReports:function(req, res) {
        console.log(req.params.id)
        db.Reports
          .find({studentId: req.params.id})
          .populate({path:'teacherId', model:User})
          .populate({path:'studentId', model:User})
          .sort({ createdAt: 'desc' })
          .then(dbModel => {
            res.json(dbModel)})
          .catch(err => res.status(422).json(err));  
      }
}