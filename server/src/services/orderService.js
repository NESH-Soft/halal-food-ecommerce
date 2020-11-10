import models from '../models/index';

const { Order } = models;

export const findOrderById = async (id) => {
  const order = await Order.findById(id);
  return order;
};

export const getAllOrderServices = async () => {
  const order = await Order.find();
  return order;
};

export const addOrderServices = async (order) => {
  const newOrder = await Order.create(order);
  return newOrder;
};

export const deleteOrderServices = async (id) => {
  const deletedOrder = Order.findByIdAndRemove(id);
  return deletedOrder;
};

export const updateOrderServices = async (id, data) => {
  const updatedOrder = Order.findByIdAndUpdate(id, data, { new: true });
  return updatedOrder;
};
