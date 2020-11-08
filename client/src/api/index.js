import axios from 'axios'

export const getProducts = async () => {
  const response = await axios.get('/api/product');
  return response.data;
}

export const getProduct = async (id) => {
  const response = await axios.get(`/api/product/${id}`);
  return response.data;
}