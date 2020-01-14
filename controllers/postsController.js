const db = require("../models");
const axios = require("axios");
const validatePostInput = require("../validation/posts");

// Defining methods for the booksController
module.exports = {
    create: function(req, res) {
      const { errors, isValid } = validatePostInput(req.body);

      // Check validation
      if (!isValid) {
          return res.status(400).json(errors);
      }

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
          .populate('likes.like')
          .sort({ createdAt: 'desc' })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      setLike: function(req, res) {
        db.Posts
          .update({_id:req.body.postId}, {
            $push: {'likes.like': req.body.userId}
          })
          .then(function() {
            return (
                    db.Posts.find({_id:req.body.postId})
                            .populate('likes.like')
                            .then(dbModel => {
                              res.json(dbModel)})
            )
          })
          .catch(err => res.status(422).json(err));
      },
      getLikes: function(req, res) {
        console.log(req.params.id)
        db.Posts
          .findById(req.params.id)
          .populate('likes.like')
          .sort({ createdAt: 'desc' })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      setComment: function(req, res) {
        console.log(req.body);
        db.Posts
          .update({_id:req.body.postId}, {
            $push: {'comments.comment': {'text': req.body.comment, 'user': req.body.user}}
          })
          .then(function() {
            return (
                    db.Posts.find({_id:req.body.postId})
                            .populate({path:'comments.comment.user', model:User})
                            .then(dbModel => {
                              res.json(dbModel)})
            )
          })
          .catch(err => res.status(422).json(err));
      },
      getComments: function(req, res) {
        db.Posts
          .findById(req.params.id)
          .populate({path:'comments.comment.user', model:User})
          .then(dbModel => {
            res.json(dbModel)})
          .catch(err => res.status(422).json(err));  
      }
}