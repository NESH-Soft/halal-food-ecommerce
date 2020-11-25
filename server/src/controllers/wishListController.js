import {
  getWishListServices,
  addWishListServices,
  deleteWishListServices,
} from '../services/wishlistServices';
import asyncHandler from '../utils/async';
import { NotFound } from '../utils/error';

export const getWishList = asyncHandler(async (req, res) => {
  const _id = req.user.id;
  const wishList = await getWishListServices(_id);
  if (!wishList) return res.status(200).json({ success: true, msg: 'No wishlist created yet' });
  return res.status(200).json({ success: true, wishList, msg: 'wishList fetch' });
});

export const addWishList = asyncHandler(async (req, res) => {
  const newWishList = await addWishListServices(req.body);
  return res.status(201).json({ success: true, newWishList, msg: 'Wishlist added successfully' });
});

export const deleteWishList = asyncHandler(async (req, res) => {
  const deletedWishList = await deleteWishListServices(req.params.id);
  if (!deletedWishList) throw NotFound('WishList not found');
  return res.status(200).json({ success: true, deletedWishList, msg: 'Wishlist remove successfully' });
});
