const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const EnquirySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  contactNumber: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  }, 
  description: {
    type: String,
    required: true
  },
  created:{
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = Enquiry = mongoose.model("enquiry", EnquirySchema);