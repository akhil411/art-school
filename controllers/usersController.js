const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const passport = require("passport");

// Load input validation
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");
const db = require("./../models");
const axios = require("axios");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.User
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  register: function(req, res) {
    const { errors, isValid } = validateRegisterInput(req.body);

        // Check validation
        if (!isValid) {
            return res.status(400).json(errors);
        }

        db.User.findOne({ email: req.body.email }).then(user => {
            if (user) {
            return res.status(400).json({ email: "Email already exists" });
            } else {
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                role:req.body.role
            });

            // Hash password before saving in database
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) throw err;
                newUser.password = hash;
                newUser
                    .save()
                    .then(user => res.json(user))
                    .catch(err => console.log(err));
                });
            });
            }
        }); 
    },
    login: function(req, res) {
        const { errors, isValid } = validateLoginInput(req.body);

        // Check validation
        if (!isValid) {
          return res.status(400).json(errors);
        }
      
        const email = req.body.email;
        const password = req.body.password;
      
        // Find user by email
        db.User.findOne({ email }).populate('role').then(user => {
          // Check if user exists
          if (!user) {
            return res.status(404).json({ emailnotfound: "Email not found" });
          }
      
          // Check password
          bcrypt.compare(password, user.password).then(isMatch => {
            console.log(user.role.name)
            if (isMatch) {
              // User matched
              // Create JWT Payload
              const payload = {
                id: user.id,
                name: user.name,
                role:user.role.name
              };
      
              // Sign token
              jwt.sign(
                payload,
                keys.secretOrKey,
                {
                  expiresIn: 31556926 // 1 year in seconds
                },
                (err, token) => {
                  res.json({
                    success: true,
                    token: "Bearer " + token
                  });
                }
              );
            } else {
              return res
                .status(400)
                .json({ passwordincorrect: "Password incorrect" });
            }
          });
        });
    },
    findbyID: function(req, res) {
      db.Roles
        .find({name:req.params.id})
        .then(function(data) {
          return (
                  db.User.find({role:data[0]._id})
                  .then(dbModel => {
                    res.json(dbModel)})
                  .catch(err => res.status(422).json(err))
          ) 
        })
        .catch(err => res.status(422).json(err));
    }
}