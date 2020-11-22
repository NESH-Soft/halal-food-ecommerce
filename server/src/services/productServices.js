import models from '../models/index';

const { Product } = models;

export const findProductById = async (id) => {
  const product = await Product.findById(id).select('cloudinaryId');
  return product;
};

export const getProductsServices = async () => {
  const products = await Product.find();
  return products;
};

export const getProductsByCategoryServices = async (category) => {
  const products = await Product.find({ category });
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
