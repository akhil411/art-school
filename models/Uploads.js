const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UploadSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = Uploads = mongoose.model("uploads", UploadSchema);