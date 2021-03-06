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
import Notification from '../../utils/Notification';

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
    const {hasNodes,label,parent} = category
    if(parent === ''){
      const category = {category: label, type: 'category'}
      return dispatch({ type: GET_PRODUCTS_BY_CATEGORY, payload: category })
    }else{
      const category = hasNodes? {category: label, type: 'category'} : {subCategory: label, type: 'subCategory'}
      return dispatch({ type: GET_PRODUCTS_BY_CATEGORY, payload: category })
    }

  } catch (error) {
    console.log(error);
  }
}

export const addReview = (productId,data) => async(dispatch) => {
  try {
    const  product = await api.addReview(productId,data);
    dispatch({ type: ADD_REVIEW, payload: product })
    Notification("added your review","success",1000)
  } catch (error) {
    Notification(error.response.data.msg,"danger",1000)
  }
}







