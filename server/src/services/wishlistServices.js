import models from '../models/index';

const { User } = models;

export const getWishListServices = async (id) => {
  const wishList = await User.findById(id).selected('wishList').populate();
  return wishList;
};

export const addWishListServices = async (wishList) => {
  const userWishList = User.findByIdAndUpdate(
    { _id: wishList.user },
    { $push: { wishList: wishList.product } },
  );
  const newWishList = await User.findById(wishList.user).populate().select('wishList');
  return newWishList;
};

export const deleteWishListServices = async (id) => {
  const deletedWishList = User.findByIdAndRemove(id);
  return deletedWishList;
};
