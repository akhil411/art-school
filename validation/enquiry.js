const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateEnquiryInput(data) {
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.contactNumber = !isEmpty(data.contactNumber) ? data.contactNumber : "";
  data.subject = !isEmpty(data.subject) ? data.subject : "";
  data.description = !isEmpty(data.description) ? data.description : "";

  // Name checks
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }

  // Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (!Validator.isLength(data.contactNumber, { min: 10, max:10 })) {
    errors.contactNumber = "Please check your Contact Number";
  }

  if (Validator.isEmpty(data.subject)) {
    errors.subject = "Subject field is required";
  }

  if (Validator.isEmpty(data.description)) {
    errors.description = "Description field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
