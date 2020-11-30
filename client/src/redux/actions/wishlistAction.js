import {
  ADD_TO_WISHLIST,
  REMOVE_WISHLIST,
  GET_WISHLIST,
} from '../type'
import * as api from '../../api';
import Notification from '../../utils/Notification'

// Action creator
export const addToWishList = (_id) => async(dispatch) => {
 
  try {
    const  wishList  = await api.addToWishList({_id});
   dispatch({ type: ADD_TO_WISHLIST, payload: wishList })
   Notification("added success","success")
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
    Notification("Remove item","danger")
  } catch (error) {
    console.log(error);
  }
}


