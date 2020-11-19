import axios from 'axios'
import allProducts from '../fakedata/detailsProduct'

export const getProducts = async () => {
  // const response = await axios.get('/api/product');
  const products = allProducts;
  return products
}

export const getProduct = async (id) => {
  const response = allProducts.find((product)=> product._id === id)
  // const response = await axios.get(`/api/product/${id}`);
  return response;
}