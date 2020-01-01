const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const RolesSchema = new Schema({
  name: {
    type: String,
  },
});

const Roles = mongoose.model("roles", RolesSchema);

Roles.find({name:"admin"})
        .then(dbModel => {
          if(dbModel == ""){
            Roles.create({name: 'admin'}, {name: 'teacher'}, {name: 'student'},{name: 'staff'}, function(err, doc) {
            });
          }
        })
        
module.exports = Roles;
