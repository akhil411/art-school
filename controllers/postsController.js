const db = require("../models");
const axios = require("axios");

// Defining methods for the booksController
module.exports = {
    create: function(req, res) {
      console.log(req.body)

      if (req.body.name) {
        db.Uploads
          .create({ name: req.body.name, url:req.body.url })
          .then(function(data) {
            return (
                    db.Posts.create({ text:req.body.text, user: req.body.user, upload: data._id })
                    .then(dbModel => res.json(dbModel))
                    .catch(err => res.status(422).json(err))
            ) 
          })
          .catch(err => res.status(422).json(err));
      } else {
        db.Posts.create({ text:req.body.text, user: req.body.user})
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      }
        
    },
    findAll: function(req, res) {
        db.Posts
          .find(req.query)
          .populate('user')
          .populate('upload')
          .sort({ createdAt: 'desc' })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      }
}