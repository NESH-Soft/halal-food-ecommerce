import {
  GET_PRODUCTS,
  GET_PRODUCT,
  GET_PRODUCTS_BY_CATEGORY,
  GET_SPECIAL_PRODUCT,
  SEARCH_PRODUCT,
  CLEAR_SEARCH_STATE,
  ADD_REVIEW
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
export const getSearchProduct = (term) => async(dispatch) => {
  try {
    const  res  = await api.searchProducts(term);
    dispatch({ type: SEARCH_PRODUCT, payload: res })
  } catch (error) {
    console.log(error);
  }
} 
export const clearSearchState = () => async(dispatch) => {
  try {
    dispatch({ type: CLEAR_SEARCH_STATE})
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

export const addReview = (data) => async(dispatch) => {
  try {
    const  products = await api.addReview(data);
   
    dispatch({ type: GET_PRODUCTS_BY_CATEGORY, payload: products })
  } catch (error) {
    console.log(error);
  }
}







