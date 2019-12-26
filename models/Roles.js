const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const RolesSchema = new Schema({
  _id: {
    type: Number,
  },
  name: {
    type: String,
  },
});

const Roles = mongoose.model("roles", RolesSchema);

Roles.create({_id: 1, name: 'admin'}, {_id: 2, name: 'teacher'}, {_id: 3, name: 'student'},{_id: 4, name: 'parent'},{_id: 5, name: 'staff'}, function(err, doc) {
});

module.exports = Roles;
