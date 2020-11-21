import {
  GET_PRODUCTS,
  GET_PRODUCT,
  GET_PRODUCTS_BY_CATEGORY,
  CHANGE_ADD_TO_CART_OPTION
} from '../type'
import * as api from '../../api';

// Action creator
export const getProducts = () => async(dispatch) => {
  try {
    const  products  = await api.getProducts();
    dispatch({ type: GET_PRODUCTS, payload: products })
  } catch (error) {
    console.log(error);
  }
} 

export const getProduct = (id) => async(dispatch) => {
  try {
    const  product  = await api.getProduct(id);
    dispatch({ type: GET_PRODUCT, payload: product })
  } catch (error) {
    console.log(error);
  }
} 
export const getProductsByCategory = (category) => async(dispatch) => {
  try {
    const  products = await api.getProductsByCategory(category);
   
    dispatch({ type: GET_PRODUCTS_BY_CATEGORY, payload: products })
  } catch (error) {
    console.log(error);
  }
}

export const changeAddToCartOption = (id) => async(dispatch) => {
  
  try {
    
     dispatch({ type: CHANGE_ADD_TO_CART_OPTION, payload: id })
  } catch (error) {
    console.log(error);
  }
}


