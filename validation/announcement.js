const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateAnnouncementInput(data) {
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  data.announcement = !isEmpty(data.announcement) ? data.announcement : "";

  // Name checks
  if (Validator.isEmpty(data.announcement)) {
    errors.announcement = "Announcement field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};