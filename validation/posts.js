const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validatePostInput(data) {
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  data.text = !isEmpty(data.text) ? data.text : "";
  data.marks = !isEmpty(data.marks) ? data.marks : "";
  data.comments = !isEmpty(data.comments) ? data.comments : "";
  data.studentId = !isEmpty(data.studentId) ? data.studentId : "";

  // Name checks
  if (Validator.isEmpty(data.text)) {
    errors.text = "Text field cannot be empty.";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};