import Joi from 'joi';

const schema = Joi.object().keys(
  {
    _id: Joi.string(),
    email: Joi.string().email().required(),
    phone: Joi.number().required(),
    password: Joi.string().min(6).required(),
    confirmPassword: Joi.ref('password'),
  },
);

const validate = (data) => {
  const result = schema.validate(data);
  result.value = data;
  return result;
};

export default validate;
