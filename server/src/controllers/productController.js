import cloudinary from 'cloudinary';
import {
  getProductsServices,
  getProductServices,
  addProductServices,
  updateProductServices,
  deleteProductServices,
  findProductById,
  getProductsByCategoryServices,
} from '../services/productServices';
import asyncHandler from '../utils/async';
import { NotFound } from '../utils/error';

export const getProducts = asyncHandler(async (req, res) => {
  const products = await getProductsServices();

  if (!products.length) return res.status(200).json({ success: true, msg: 'No product created yet' });

  return res.status(200).json({ success: true, products, msg: 'All products fetched' });
});

export const getProductsByCategory = asyncHandler(async (req, res) => {
  const products = await getProductsByCategoryServices(req.params.category);

  if (!products.length) return res.status(200).json({ success: true, msg: 'No product found in this category' });

  return res.status(200).json({ success: true, products, msg: 'All specific categories products fetched' });
});

export const addProduct = asyncHandler(async (req, res) => {
  const imageUpload = cloudinary.v2;

  imageUpload.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
  });

  // Uploading image to cloudinary
  const result = await imageUpload.uploader.upload(req.file.path);
  if (!result) throw NotFound('Failed to save image');

  req.body.image = result.secure_url;
  req.body.cloudinaryId = result.public_id;

  const newProduct = await addProductServices(req.body);

  return res.status(201).json({ success: true, newProduct, msg: 'New product added successfully' });
});

export const getProduct = asyncHandler(async (req, res) => {
  const product = await getProductServices(req.params.id);
  if (!product) throw new NotFound('Product not found');
  return res.status(200).json({ success: true, product, msg: 'Single product fetched' });
});

export const updateProduct = asyncHandler(async (req, res) => {
  const updatedProduct = await updateProductServices(req.params.id, req.body);
  return res.status(200).json({ success: true, updatedProduct, msg: 'Product update successfully' });
});

export const deleteProduct = asyncHandler(async (req, res) => {
  const productImage = await findProductById(req.params.id);
  if (!productImage.cloudinaryId) {
    throw new NotFound(`Product not found by the is:${req.params.id}`);
  }

  const imageUpload = cloudinary.v2;
  imageUpload.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
  });

  // Deleting image from cloudinary
  await imageUpload.uploader.destroy(productImage.cloudinaryId);

  const deletedProduct = await deleteProductServices(req.params.id);
  return res.status(200).json({ success: true, deletedProduct, msg: 'Product deleted successfully' });
});
