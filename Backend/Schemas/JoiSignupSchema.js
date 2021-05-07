const Joi = require('joi');

const signupValidationSchema = function (data) {
  const schema = Joi.object({

    emailAddress: Joi.string().min(10).max(50).required().email({ minDomainSegments: 2, tlds: { allow: ["com", 'net']}}),

    password: Joi.string()
      .min(10)
      .max(50)
      .required(),

      confirmPassword: Joi.ref('password'),

      // access_token: [
      //     Joi.string(),
      //     Joi.number()
      // ],

      // birth_year: Joi.number()
      //     .integer()
      //     .min(1900)
      //     .max(2013),

      // email: Joi.string()
      //     .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
  });
  return schema.validate(data);
};

module.exports = signupValidationSchema;
