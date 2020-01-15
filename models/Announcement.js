const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const AnnouncementSchema = new Schema({
  announcement: {
    type: String,
    required: true
  },
  user: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = Announcement = mongoose.model("announcement", AnnouncementSchema);
