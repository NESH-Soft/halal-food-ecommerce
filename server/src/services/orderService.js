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

export const changeOrderActionServices = async (id, data) => {
  const updatedOrder = Order.findByIdAndUpdate(id, data, { new: true });
  return updatedOrder;
};
export const getOrderServices = async () => {
  const order = await Order.find()
    .populate({ path: 'user', model: 'user', select: 'name email' });
  return order;
};
export const getRecentOrderServices = async () => {
  const order = await Order.find()
    .populate({ path: 'user', model: 'user', select: 'name' })
    .sort({ createdAt: -1 }).limit(7);
  return order;
};
export const getTodayOrderServices = async () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const todayOrder = await Order.find({ createdAt: { $gte: new Date(today) } }).select('totalPrice createdAt');
  return todayOrder;
};
export const getOrderByDayServices = async (query) => {
  const oldDate = (new Date().getTime() - (query * 24 * 60 * 60 * 1000));
  const day = new Date(oldDate);
  day.setHours(0, 0, 0, 0);
  const orderInfoByDay = await Order.aggregate([
    {
      $match: {
        createdAt: { $gte: new Date(day) },
      },
    },
    { $unwind: '$cart' },
    {
      $group: {
        _id: "tr4543543",
        totalSaleAmount: { $sum: '$totalPrice' },
        totalSoldProduct: { $sum: '$cart.quantity' },
        totalSoldInvoice: { $sum: 1 },
        totalProductCost: { $sum: { $multiply: ['$cart.price', '$cart.quantity'] } },
      },
    },
  ]);
  return orderInfoByDay;
};
export const getOrderInfoServices = async () => {
  const totalSaleInfo = await Order.aggregate([
    { $unwind: '$cart' },
    {
      $group: {
        _id: "tr4543543",
        totalSaleAmount: { $sum: '$totalPrice' },
        totalOrder: { $sum: 1 },
        totalSoldProductQuantity: { $sum: '$cart.quantity' },
        totalProductCost: { $sum: { $multiply: ['$cart.price', '$cart.quantity'] } },
      },
    },
  ]);
  return totalSaleInfo;
};
