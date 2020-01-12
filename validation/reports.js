const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateReportsInput(data) {
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  data.subject = !isEmpty(data.subject) ? data.subject : "";
  data.marks = !isEmpty(data.marks) ? data.marks : "";
  data.comments = !isEmpty(data.comments) ? data.comments : "";
  data.studentId = !isEmpty(data.studentId) ? data.studentId : "";

  // Name checks
  if (Validator.isEmpty(data.subject)) {
    errors.subject = "Subject field is required";
  }


  if (Validator.isEmpty(data.marks)) {
    errors.marks = "Marks field is required";
  }

  if (Validator.isEmpty(data.comments)) {
    errors.comments = "Comments field is required";
  }

  if (Validator.isEmpty(data.studentId)) {
    errors.studentId = "Select A Student";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};