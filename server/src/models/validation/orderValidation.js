import Joi from 'joi';

const schema = Joi.object().keys(
  {
    userId: Joi.string(),
    card: Joi.object().required(),
    customer: Joi.object(),
    cart: Joi.array().required(),
    shipping: Joi.object().required(),
    status: Joi.string(),
    shippingCost: Joi.number().required(),
    subTotal: Joi.number().required(),
    tax: Joi.number().required(),
    totalPrice: Joi.number().required(),
  },
);

const validate = (data) => {
  const result = schema.validate(data);
  result.value = data;
  return result;
};

export default validate;
