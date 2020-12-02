import { v4 } from 'uuid';
import stripes from 'stripe';
import {
  getAllOrderServices,
  findOrderById,
  addOrderServices,
  deleteOrderServices,
  getOrderServices,
  changeOrderActionServices,
  getRecentOrderServices,
  getTodayOrderServices,
  getOrderByDayServices,
  getOrderInfoServices,
} from '../services/orderService';

import { addOrderService, createUserServices } from '../services/userServices';
import { findProductById } from '../services/productServices';

import asyncHandler from '../utils/async';
import { BadRequest, NotFound } from '../utils/error';

export const getOrders = asyncHandler(async (req, res) => {
  const order = await getAllOrderServices();
  if (!order.length) return res.status(200).json({ success: true, msg: 'No order created yet' });
  return res.status(200).json({ success: true, order, msg: 'all order fetch' });
});

export const addOrder = asyncHandler(async (req, res) => {
  const stripe = stripes('sk_test_51HnPyBFkx0vu20iT33sYaiwBQAtCOFJADWs4x4gPJfST1NmPjkJeoeoPvENf1ISEOdobB124k0OSlYkCfLh8ohPK001Ch5ZyCz');
  const {
    cart,
    customer,
    shipping,
    card,
    totalPrice,
    userId,
  } = req.body;

  const idempontencyKey = v4();

  const token = await stripe.tokens.create({
    card: {
      number: card.cardNumber,
      exp_month: card.expireMonth,
      exp_year: card.expireYear,
      cvc: card.cvc,
    },
  });

  if (!token) {
    throw new BadRequest('Something went wrong!!');
  }

  // const newCustomer = await stripe.customers.create({
  //   email: customer.email,
  //   source: token.id,
  // });

  const payment = await stripe.charges.create({
    amount: totalPrice,
    currency: 'jpy',
    source: token.id,
    shipping: {
      name: customer.name,
      address: {
        country: 'japan',
        line1: shipping.line1,
        city: shipping.city,
        postal_code: shipping.postalCode,
      },
    },
    receipt_email: customer.email,
  });

  if (payment instanceof Error) throw new BadRequest('Payment failed');

  await Promise.all(cart.map(async (product) => {
    const result = await findProductById(product._id);
    // const updatedStock = result.stock - product.quantity;
    result.stock -= product.quantity;
    await result.save();
  }));

  if (userId) {
    const newOrder = await addOrderServices({
      paymentId: payment.id,
      shipping,
      user: userId,
      cart,
      totalPrice,
    });
    const orderAddedToUser = await addOrderService(userId, newOrder._id);
    if (!orderAddedToUser) {
      throw new BadRequest('Something went wrong!!');
    }
    return res.status(201).json({
      success: true,
      newOrder,
      payment,
      msg: 'Order added successfully',
    });
  }

  const newUser = await createUserServices(customer);
  const newOrder = await addOrderServices({
    paymentId: payment.id,
    shipping,
    user: newUser._id,
    cart,
    totalPrice,
  });

  return res.status(201).json({
    success: true,
    newOrder,
    payment,
    msg: 'Order added successfully',
  });
});

export const addOrderCashOnDelivery = asyncHandler(async (req, res) => {
  const {
    cart,
    customer,
    shipping,
    totalPrice,
    userId,
  } = req.body;

  await Promise.all(cart.map(async (product) => {
    const result = await findProductById(product._id);
    // const updatedStock = result.stock - product.quantity;
    result.stock -= product.quantity;
    await result.save();
  }));

  if (userId) {
    const newOrder = await addOrderServices({
      shipping,
      user: userId,
      cart,
      totalPrice,
    });
    const orderAddedToUser = await addOrderService(userId, newOrder._id);
    if (!orderAddedToUser) {
      throw new BadRequest('Something went wrong!!');
    }
    return res.status(201).json({
      success: true,
      newOrder,
      msg: 'Order added successfully',
    });
  }

  const newUser = await createUserServices(customer);
  const newOrder = await addOrderServices({
    shipping,
    user: newUser._id,
    cart,
    totalPrice,
  });

  return res.status(201).json({
    success: true,
    newOrder,
    msg: 'Order added successfully',
  });
});

export const deleteOrder = asyncHandler(async (req, res) => {
  const deletedOrder = await deleteOrderServices(req.params.id);
  if (!deletedOrder) throw NotFound('Order not found');
  return res.status(200).json({ success: true, deletedOrder, msg: 'Order delete successfully' });
});

export const changeOrderAction = asyncHandler(async (req, res) => {
  const updatedOrder = await changeOrderActionServices(req.params.id, req.body);
  if (!updatedOrder) throw NotFound('Order not found');
  return res.status(200).json({ success: true, updatedOrder, msg: 'Order updated successfully' });
});
// start working
export const getOrderByFilter = asyncHandler(async (req, res) => {
  const orders = await getOrderServices(req.query.status);
  if (!orders) throw NotFound(`${req.query.status} order not found`);
  return res.status(200).json({ success: true, orders, msg: 'Order fetch' });
});
// export const getOrderDelivery = asyncHandler(async (req, res) => {
//   const orders = await getOrdersDeliveryServices();
//   if (!orders) throw NotFound('Delivery order not found');
//   return res.status(200).json({ success: true, orders, msg: 'Delivery Order fetch' });
// });
// export const getOrderCancel = asyncHandler(async (req, res) => {
//   const orders = await getOrdersCancelServices();
//   if (!orders) throw NotFound('Cancel Order not found');
//   return res.status(200).json({ success: true, orders, msg: 'Cancel Order fetch' });
// });
export const getRecentOrder = asyncHandler(async (req, res) => {
  const recentOrder = await getRecentOrderServices();
  if (!recentOrder) throw NotFound('No recent order yet');
  return res.status(200).json({ success: true, recentOrder, msg: 'Recent order fetch' });
});
export const getOrderToday = asyncHandler(async (req, res) => {
  const todayOrder = await getTodayOrderServices();
  if (!todayOrder) throw NotFound('No order found today');
  return res.status(200).json({ success: true, todayOrder, msg: 'Today order fetch' });
});
export const getOrderDay = asyncHandler(async (req, res) => {
  const orderByDay = await getOrderByDayServices(req.query.day);
  if (!orderByDay) throw NotFound('No order found');
  return res.status(200).json({ success: true, orderByDay, msg: 'fetch order by day' });
});
export const getOrderInfo = asyncHandler(async (req, res) => {
  const orderInfo = await getOrderInfoServices();
  if (!orderInfo) throw NotFound('No order info found');
  return res.status(200).json({ success: true, orderInfo, msg: 'Order info fetch' });
});
