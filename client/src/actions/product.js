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