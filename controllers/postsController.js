const db = require("../models");
const axios = require("axios");

// Defining methods for the booksController
module.exports = {
    create: function(req, res) {
        db.Posts
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    findAll: function(req, res) {
        db.Posts
          .find(req.query)
          .sort({ createdAt: 'desc' })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      }
}