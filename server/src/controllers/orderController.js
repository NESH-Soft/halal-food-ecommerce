import { v4 } from 'uuid';
import stripes from 'stripe';
import {
  getAllOrderServices,
  findOrderById,
  addOrderServices,
  deleteOrderServices,
  updateOrderServices,
} from '../services/orderService';
import asyncHandler from '../utils/async';
import { BadRequest, NotFound } from '../utils/error';

export const getOrders = asyncHandler(async (req, res) => {
  const order = await getAllOrderServices();
  if (!order.length) return res.status(200).json({ success: true, msg: 'No order created yet' });
  return res.status(200).json({ success: true, order, msg: 'all category fetch' });
});

export const addOrder = asyncHandler(async (req, res) => {
  const stripe = stripes('sk_test_51HnPyBFkx0vu20iT33sYaiwBQAtCOFJADWs4x4gPJfST1NmPjkJeoeoPvENf1ISEOdobB124k0OSlYkCfLh8ohPK001Ch5ZyCz');
  const {
    cart,
    customer,
    shipping,
    card,
    totalPrice,
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

  console.log(token);

  // const newCustomer = await stripe.customers.create({
  //   email: customer.email,
  //   source: token.id,
  // });

  const payment = await stripe.charges.create({
    amount: totalPrice * 100,
    currency: 'usd',
    source: token.id,
    shipping: {
      name: customer.firstName,
      address: {
        country: 'japan',
        line1: shipping.address,
        city: shipping.city,
        postal_code: shipping.postalCode,
      },
    },
    receipt_email: customer.email,
  });

  // const newOrder = await addOrderServices({
  //   paymentId: payment.id,
  //   cart,
  //   status: 'pending',
  //   totalPrice,
  // });
  return res.status(201).json({
    success: true,
    token,
    payment,
    msg: 'Order added successfully',
  });
});

export const deleteOrder = asyncHandler(async (req, res) => {
  const deletedOrder = await deleteOrderServices(req.params.id);
  if (!deletedOrder) throw NotFound('Order not found');
  return res.status(200).json({ success: true, deletedOrder, msg: 'Order delete successfully' });
});

export const updateOrder = asyncHandler(async (req, res) => {
  const newOrder = null; // Creating order logic goes here
  const updatedOrder = await updateOrderServices(req.params.id, newOrder);
  if (!updatedOrder) throw NotFound('Order not found');
  return res.status(200).json({ success: true, updatedOrder, msg: 'Order updated successfully' });
});
