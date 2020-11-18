import models from '../models/index';

const { Shipping } = models;

export const getShippingServices = async (id) => {
  const shipping = await Shipping.findById(id);
  return shipping;
};

export const addShippingServices = async (shipping) => {
  const newShipping = await Shipping.create(shipping);
  return newShipping;
};

export const deleteShippingServices = async (id) => {
  const deletedShipping = Shipping.findByIdAndRemove(id);
  return deletedShipping;
};

export const updateShippingServices = async (id, data) => {
  const updatedShipping = Shipping.findByIdAndUpdate(id, data, { new: true });
  return updatedShipping;
};
