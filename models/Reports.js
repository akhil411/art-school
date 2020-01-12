const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ReportsSchema = new Schema({
    subject: {
    type: String,
    required: true
  },
  marks: {
    type: String,
    required: true
  },
  comments: {
    type: String,
    required: true
  },
  teacherId: { 
    type: Schema.Types.ObjectId, 
    ref: 'users'
  },
  studentId: { 
    type: Schema.Types.ObjectId, 
    ref: 'users'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = Reports = mongoose.model("reports", ReportsSchema);
