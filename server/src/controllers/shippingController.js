import {
  getShippingServices,
  addShippingServices,
  updateShippingServices,
  deleteShippingServices,
} from '../services/shippingServices';
import asyncHandler from '../utils/async';
import { NotFound } from '../utils/error';

export const getShipping = asyncHandler(async (req, res) => {
  const _id = req.user.Id;
  const shipping = await getShippingServices(_id);
  if (!shipping.length) return res.status(200).json({ success: true, msg: 'No Shipping created yet' });
  return res.status(200).json({ success: true, shipping, msg: 'Shipping fetch' });
});

export const addShipping = asyncHandler(async (req, res) => {
  const newShipping = await addShippingServices(req.body);
  return res.status(201).json({ success: true, newShipping, msg: 'Shipping added successfully' });
});

export const updateShipping = asyncHandler(async (req, res) => {
  const newShipping = null; // Creating shipping logic goes here
  const updatedShipping = await updateShippingServices(req.params.id, newShipping);
  if (!updatedShipping) throw NotFound('Shipping not found');
  return res.status(200).json({ success: true, updatedShipping, msg: 'Shipping updated successfully' });
});

export const deleteShipping = asyncHandler(async (req, res) => {
  const deletedShipping = await deleteShippingServices(req.params.id);
  if (!deletedShipping) throw NotFound('Shipping not found');
  return res.status(200).json({ success: true, deletedShipping, msg: 'Shipping remove successfully' });
});
