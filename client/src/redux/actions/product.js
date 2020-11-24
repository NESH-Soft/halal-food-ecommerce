import {
  GET_PRODUCTS,
  GET_PRODUCT,
  GET_PRODUCTS_BY_CATEGORY,
  CHANGE_ADD_TO_CART_OPTION,
  CHANGE_ADD_TO_WISHLIST_OPTION,
  GET_SPECIAL_PRODUCT,
  SEARCH_PRODUCT,
  CHANGE_SHOP_ADD_TO_CART_OPTION,
  CHANGE_SHOP_ADD_TO_WISHLIST_OPTION,
  CHANGE_SPACIALPRODUCTS_ADD_TO_CART
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

export const changeAddToCartOption = (id) => async(dispatch) => {

  try {
    
     dispatch({ type: CHANGE_ADD_TO_CART_OPTION, payload: id })
    //  dispatch({ type: CHANGE_SHOP_ADD_TO_CART_OPTION, payload: id })
  } catch (error) {
    console.log(error);
  }
}


export const changeAddToWishlistOption = (id) => async(dispatch) => {
  
  try {
    
     dispatch({ type: CHANGE_ADD_TO_WISHLIST_OPTION, payload: id })
    //  dispatch({ type: CHANGE_SHOP_ADD_TO_WISHLIST_OPTION, payload: id })
  } catch (error) {
    console.log(error);
  }
}



export const changeShopAddToCartOption = (id) => async(dispatch) => {
  try {
    
     dispatch({ type: CHANGE_SHOP_ADD_TO_CART_OPTION, payload: id })
    
  } catch (error) {
    console.log(error);
  }
}

export const changeShopAddToWishlistOption = (id) => async(dispatch) => {
  try {
    
     dispatch({ type: CHANGE_SHOP_ADD_TO_WISHLIST_OPTION, payload: id })
    
  } catch (error) {
    console.log(error);
  }
}

export const changeSpecialProductsAddToCartOption = (id) => async(dispatch) => {
  try {
    
     dispatch({ type: CHANGE_SPACIALPRODUCTS_ADD_TO_CART, payload: id })
    
  } catch (error) {
    console.log(error);
  }
}




