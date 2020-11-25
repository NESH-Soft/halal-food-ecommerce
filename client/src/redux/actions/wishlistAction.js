import {
  ADD_TO_WISHLIST,
  REMOVE_WISHLIST,
  GET_WISHLIST,
  CHANGE_ADD_TO_CART_IN_WISHLIST
} from '../type'
import * as api from '../../api';

// Action creator
export const addToWishList = (_id) => async(dispatch) => {
 
  try {
    const  wishList  = await api.addToWishList({_id});
    console.log(wishList)
    dispatch({ type: ADD_TO_WISHLIST, payload: wishList })
  } catch (error) {
    console.log(error);
  }
} 

export const getWishList = () => async(dispatch) => {
  try {
    const  wishlist  = await api.getWishList();
    dispatch({ type: GET_WISHLIST, payload: wishlist })
  } catch (error) {
    console.log(error);
  }
} 
export const removeWishList = (id) => async(dispatch) => {
  try {
    const  wishlistId = await api.removeWishList(id);
   
    dispatch({ type: REMOVE_WISHLIST, payload: wishlistId })
  } catch (error) {
    console.log(error);
  }
}

export const changeAddToCartOptionInWishlist = (id) => async(dispatch) => {
  try {
    
     dispatch({ type: CHANGE_ADD_TO_CART_IN_WISHLIST, payload: id })
    
  } catch (error) {
    console.log(error);
  }
}

