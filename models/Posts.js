const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const PostsSchema = new Schema({
  text: {
    type:String 
  },
  user: {
    type:String 
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Posts = mongoose.model("posts", PostsSchema);
        
module.exports = Posts;
