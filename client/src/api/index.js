import axios from 'axios'
import allProducts from '../fakedata/detailsProduct'
import users from '../fakedata/fakeUser'
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

export const signIn = async (data) => {
  const response = users.find((user)=> user.email === data.email)
  if(response){
    const token = "sdauisr78357634whebfiweurfkcsjhfe7r476e4dgdfg";
    const success= true
     return {token,success}
  }
  // const response = await axios.get(`/api/product/${id}`);
}



export const registration = async (data) => {
    return {success: true, data: `Please check your email ${data.email} to complete signUp process` }
  // const response = await axios.get(`/api/product/${id}`);
}

export const loadUser = async () => {
  const demouser = {name:"demouser",email:"emo@gmail.com",password:"123456"}
  return demouser
  // const response = await axios.get(`/api/product/${id}`);
}
