import models from '../models/index';

const { Product } = models;

export const findProductById = async (id) => {
  const product = await Product.findById(id);
  return product;
};

export const getProductsServices = async () => {
  const products = await Product.find().sort({ createdAt: -1 });
  return products;
};

export const getProductsByCategoryServices = async (data) => {
  const products = await Product.find(data);
  return products;
};

export const getProductServices = async (id) => {
  const product = await Product.findById(id);
  return product;
};

export const addProductServices = async (product) => {
  const newProduct = await Product.create(product);
  return newProduct;
};

export const updateProductServices = async (id, data) => {
  // eslint-disable-next-line
  const updateProduct = Product.findByIdAndUpdate( id, data, { new: true });
  return updateProduct;
};

export const deleteProductServices = async (id) => {
  const product = Product.findByIdAndRemove(id);
  return product;
};

export const searchProductServices = async (term) => {
  const product = Product.find(
    {
      $text: { $search: term },
    },
  );
  return product;
};

export const getProductInfoService = async () => {
  const productInfo = await Product.aggregate([
    {
      $group: {
        _id: 'total_product_info',
        totalProductCost: { $sum: { $multiply: ['$specialPrice', '$stock'] } },
        totalProduct: { $sum: '$stock' },
        totalProductType: { $sum: 1 },
      },
    },
  ]);

  return productInfo;
};

export const postReviewServices = async (id, data) => {
  // eslint-disable-next-line
    const newReview = await Product.findByIdAndUpdate(
    { _id: id },
    { $push: { review: data } },
    { new: true },
  );
  return newReview;
};

export const removeReviewServices = async (productId, reviewId) => {
  const removedReview = await Product.findByIdAndUpdate(
    { _id: productId },
    { $pull: { review: { _id: reviewId } } },
    { new: true },
  );
  return removedReview;
};

export const getAllReviewServices = async () => {
  const allReview = await Product.find().select('review').sort({ createdAt: -1 });
  return allReview;
};
