import * as api from '../api';

// Action creator
export const getProducts = () => async(dispatch) => {
  try {
    const { products } = await api.getProducts();
    dispatch({ type: 'GET_PRODUCTS', payload: products })
  } catch (error) {
    console.log(error);
  }
} 

export const getProduct = (id) => async(dispatch) => {
  try {
    const { product } = await api.getProduct(id);
    dispatch({ type: 'GET_PRODUCT', payload: product })
  } catch (error) {
    console.log(error);
  }
} 