const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateUpdatePassword(data) {
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  data.newPassword1 = !isEmpty(data.newPassword1) ? data.newPassword1 : "";
  data.newPassword2 = !isEmpty(data.newPassword2) ? data.newPassword2 : "";

  // Password checks
  if (Validator.isEmpty(data.newPassword1)) {
    errors.newPassword1 = "Password field is required";
  }

  if (Validator.isEmpty(data.newPassword2)) {
    errors.newPassword2 = "Confirm password field is required";
  }

  if (!Validator.equals(data.newPassword1, data.newPassword2)) {
    errors.newPassword2 = "Passwords must match";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
