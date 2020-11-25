import axios from 'axios'
import allProducts from '../fakedata/detailsProduct'
import users from '../fakedata/fakeUser'
import fakecategory from '../fakedata/fakecategory'
import fakeWishlist from '../fakedata/fakeWishList';
import fakespecialproduct from '../fakedata/fakespecialProducts';

const config={ header:{ 'Content-Type':'application/json' }}


export const getProducts = async () => {
  const response = await axios.get('/api/product');
  // const products = allProducts;
  return response.data.products;
}

export const getProduct = async (id) => {
  // const response = allProducts.find((product)=> product._id === id)
  const response = await axios.get(`/api/product/${id}`);
  return response.data.product;
}

export const signIn = async (data) => {
  // const response = users.find((user)=> user.email === data.email)
  const response = await axios.post(`/api/user/login`, data, config);
  return response.data;

  // const response = await axios.get(`/api/product/${id}`);
}



export const registration = async (data) => {
  // return {success: true, data: `Please check your email ${data.email} to complete signUp process` }
  const response = await axios.get(`/api/user/register`, data, config);
  return response.data
}

export const loadUser = async () => {
  const response = await axios.get(`/api/user/me`);
  return response.data;
}


export const getCategory = async () => {
  // return fakecategory;
  const response = await axios.get(`/api/category`);
  return response.data.category;
}



export const getProductsByCategory = async (category) => {
  if(!category){
    return allProducts;
  }
  const response = await axios.get(`/api/product/filter/${category}`);
  // const products = allProducts.filter(product=> product.category === category.category)

  return response.data.products;
}


export const addToWishList = async (wishItem) => {
  
  
  const response = await axios.post(`/api/wishlist`, wishItem, config);
  //fakeWishlist.push(wishItem)
  return response.data;
  
}

export const getWishList = async () => {
  const response = await axios.get(`/api/wishlist`);
  return response.data;
  
}

export const removeWishList = async (id) => {
  const response = await axios.delete(`/api/wishlist${id}`);
  // const removedWishItem = fakeWishlist.filter(w=>w._id !== id)
  return response.data.deletedWishList._id;

}


export const createOrderCashOnDelivery = async (order) => {
  
  const orderReceived = {}
  return orderReceived

}

export const createOrder = async (order) => {

  const orderReceived = {}
  return orderReceived
}

export const cancelOrder = async (order) => {
  
  const orderReceived = {}
  return orderReceived
}

export const getOrder = async () => {

  const order = {}
  return order
}



export const getSpecialProducts = async () => {
 
  return fakespecialproduct
}


export const searchProducts = async (data) => {
 
  return fakespecialproduct
}







