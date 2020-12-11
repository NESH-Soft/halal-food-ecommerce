import axios from 'axios'
// import allProducts from '../fakedata/detailsProduct'
// import users from '../fakedata/fakeUser'
// import fakecategory from '../fakedata/fakecategory'
// import fakeWishlist from '../fakedata/fakeWishList';
// import fakespecialproduct from '../fakedata/fakespecialProducts';

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
  // return {success: true, msg: `Please check your email ${data.email} to complete signUp process` }
   const response = await axios.post(`/api/user/register`, data, config);
  return response.data
}

export const registrationVerify = async (registerToken) => {

  const response = await axios.get(`/api/user/verify/${registerToken}`,config);
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



export const getProductsByCategory = async (data) => {
const {hasNodes,label} = data
const type= hasNodes? 'category' : 'subCategory'
const response = await axios.get(`/api/product/filter?${type}=${label}`);
return response.data.products;



}


export const addToWishList = async (_id) => {
  
  
  const response = await axios.post(`/api/wishlist`, _id, config);
  //fakeWishlist.push(wishItem)

  return response.data;
  
}

export const getWishList = async () => {
  const response = await axios.get(`/api/wishlist`);
  return response.data;
  
}

export const removeWishList = async (id) => {
  const response = await axios.delete(`/api/wishlist/${id}`);
  // const removedWishItem = fakeWishlist.filter(w=>w._id !== id)
  return response.data;

}


export const createOrderCashOnDelivery = async (order) => {
  const response = await axios.post('/api/order/cash-on-delivery', order, config);
  console.log(response.data);

  const orderReceived = {}
  return orderReceived

}

export const createOrder = async (order) => {
  const response = await axios.post('/api/order', order, config);
  console.log(response.data);

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
  const response = await axios.get(`/api/product/special-product?productType=special`);
  return response.data.products;
 
}


export const searchProducts = async (term) => {

  const response = await axios.get(`/api/product/search?term=${term.searchInput}`);
  return response.data
}

export const sendMail = async (data) => {
  const response = await axios.post('/api/user/contact-us',data,config);
  return response.data
}









