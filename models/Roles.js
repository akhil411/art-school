const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const RolesSchema = new Schema({
  value: {
    type:String ,
  },
  name: {
    type: String,
  },
});

const Roles = mongoose.model("roles", RolesSchema);

Roles.find({name:"admin"})
        .then(dbModel => {
          if(dbModel == ""){
            Roles.create({value: "1", name: 'admin'}, {value: "2", name: 'teacher'}, {value: "3", name: 'student'},{value: "4", name: 'staff'}, function(err, doc) {
            });
          }
        })
        
module.exports = Roles;
