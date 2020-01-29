const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ResumeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = Resume = mongoose.model("resume", ResumeSchema);
