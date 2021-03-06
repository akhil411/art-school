const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const PostsSchema = new Schema({
  text: {
    type: String
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  upload: {
    type: Schema.Types.ObjectId,
    ref: 'uploads'
  },
  likes: {
    like: [{
      type: Schema.Types.ObjectId,
      ref: 'users'
    }]
  },
  comments: {
    comment: [{
      text: {
        type: String
      },
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      }
    }]
  },
  created: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Posts = mongoose.model("posts", PostsSchema);

module.exports = Posts;
