const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validatePostInput(data) {
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  data.comment = !isEmpty(data.comment) ? data.comment : "";

  // Name checks
  if (Validator.isEmpty(data.comment)) {
    errors.comment = "Field cannot be empty.";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
