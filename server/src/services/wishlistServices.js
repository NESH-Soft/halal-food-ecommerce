import models from '../models/index';

const { User, Product } = models;

export const getWishListServices = async (id) => {
  const wishList = await User.findById(id).populate('wishList');
  return wishList.wishList;
};

export const addWishListServices = async (wishList) => {
  await User.findByIdAndUpdate(
    { _id: wishList.user },
    { $push: { wishList: wishList.productId } },
    { new: true },
  );
  const addedProduct = await Product.findById(wishList.productId);
  return addedProduct;
};

export const deleteWishListServices = async (userId, productId) => {
  await User.findByIdAndUpdate(
    { _id: userId },
    { $pull: { wishList: productId } },
    { new: true },
  );
  // const addedProduct = await Product.findById(wishList.productId);
  return productId;
};
