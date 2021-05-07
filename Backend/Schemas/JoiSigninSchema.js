const Joi = require("joi");

const signinValidationSchema = (data) => {
  const schema = Joi.object({
    emailAddress: Joi.string().min(10).max(50).required().email({ minDomainSegments: 2, tlds: { allow: ['com', "net",]}}),

    password: Joi.string()
      .min(10)
      .max(50)
      .required(),

  });
  return schema.validate(data);
};

module.exports = signinValidationSchema;
