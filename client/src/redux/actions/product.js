import {
  GET_PRODUCTS,
  GET_PRODUCT,
  GET_PRODUCTS_BY_CATEGORY,
  GET_SPECIAL_PRODUCT,
  SEARCH_PRODUCT,
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

export const getSpecialProducts = () => async(dispatch) => {
  try {
    const  products  = await api.getSpecialProducts();
    dispatch({ type: GET_SPECIAL_PRODUCT, payload: products })
  } catch (error) {
    console.log(error);
  }
} 
export const getSearchProduct = (data) => async(dispatch) => {
  try {
    const  products  = await api.searchProducts(data);
    dispatch({ type: SEARCH_PRODUCT, payload: products })
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








