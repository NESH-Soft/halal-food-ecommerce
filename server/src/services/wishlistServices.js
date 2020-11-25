import models from '../models/index';

const { WishList } = models;

export const getWishListServices = async (id) => {
  const wishList = await WishList.findOne({ user: id });
  return wishList;
};

export const addWishListServices = async (wishList) => {
  const newWishList = await WishList.create(wishList);
  return newWishList;
};

export const deleteWishListServices = async (id) => {
  const deletedWishList = WishList.findByIdAndRemove(id);
  return deletedWishList;
};
