const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model("users", UserSchema);

const Admin = new User({name:"admin", email:"admin@school.com", password:'$2a$10$4GhZYSgVoiJ.uGs1/wMdqeNo9xtodW6oKleAP2j/0/a/pjXgqfBb2', role:1 })

User.find({name:"admin"})
        .then(dbModel => {
          if(dbModel == ""){
            Admin.save();
          }
        })

;
