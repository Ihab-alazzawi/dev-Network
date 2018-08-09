const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validatePostInput(data) {
  let errors = {};

  data.subject = !isEmpty(data.subject) ? data.subject : '';

  if (!Validator.isLength(data.subject, { min: 10, max: 100 })) {
    errors.subject = 'Subject must be between 10 and 100 characters';
  }

  if (Validator.isEmpty(data.subject)) {
    errors.subject = 'Subject field is required';
  }
  data.text = !isEmpty(data.text) ? data.text : '';
  if (!Validator.isLength(data.text, { min: 10, max: 500 })) {
    errors.text = 'Post must be between 10 and 500 characters';
  }
  if (Validator.isEmpty(data.text)) {
    errors.text = 'Text field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
