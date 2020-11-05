import {
  getProductsServices,
  getProductServices,
  addProductServices,
  updateProductServices,
  deleteProductServices,
} from '../services/productServices';
import asyncHandler from '../utils/async';

export const getProducts = asyncHandler(async (req, res) => {
  const products = await getProductsServices();
  return res.status(200).send(products);
});

export const addProduct = asyncHandler(async (req, res) => {
  const product = await addProductServices(req.body);
  return res.status(201).send(product);
});

export const getProduct = asyncHandler(async (req, res) => {
  const product = await getProductServices(req.params.id);
  return res.status(200).json({ product, msg: 'product fetch', success: true });
});

export const updateProduct = asyncHandler(async (req, res) => {
  console.log(req.params.id)
  const product = await updateProductServices(req.params.id, req.body);
  return res.status(200).json({ product, msg: 'product update success', success: true });
});

export const deleteProduct = asyncHandler(async (req, res) => {
  const product = await deleteProductServices(req.params.id);
  return res.status(200).json({ product, msg: 'product delete success', success: true });
});
