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
  const wishlistObj = { user: req.user._id, productId: req.body._id };
  const newWishList = await addWishListServices(wishlistObj);
  if (newWishList) {
    return res.status(201).json({ success: true, newWishList, msg: 'Wishlist added successfully' });
  }
  throw new NotFound('WishList not found');
});

export const deleteWishList = asyncHandler(async (req, res) => {
  const deletedWishListId = await deleteWishListServices(req.user._id, req.params.id);
  if (!deletedWishListId) throw NotFound('WishList not found');
  return res.status(200).json({ success: true, deletedWishListId, msg: 'Wishlist remove successfully' });
});
