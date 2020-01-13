const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Roles = require("./Roles")

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
    type: Schema.Types.ObjectId, 
    ref: 'roles'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model("users", UserSchema);

const Admin = new User({name:"admin", email:"admin@school.com", password:'$2a$10$4GhZYSgVoiJ.uGs1/wMdqeNo9xtodW6oKleAP2j/0/a/pjXgqfBb2', 'role.name':'admin'})

User.find({name:"admin"})
        .then(dbModel => {
          if(dbModel == ""){
  Admin.save();
  Roles.find({name:"admin"})
  .then(function(data) {
    console.log(data[0])
    return (
            User.updateOne({ name:"admin" }, {role:data[0]._id})
    ) 
  })
  }
})
