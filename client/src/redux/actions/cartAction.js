import * as api from '../../api';
import {
  ADD_TO_CART,
  REMOVE_CART,
  CART_ITEM_DECREMENT,
  CART_ITEM_INCREMENT,
} from '../type'
import {changeAddToCartOption} from './product'
// Action creator
export const addToCart = (data) => async(dispatch) => {
  dispatch(changeAddToCartOption(data._id))
  try {
    dispatch({ type: ADD_TO_CART, payload: data })
  } catch (error) {
    console.log(error);
  }
} 
export const removeCart = (id) => async(dispatch) => {
  try {
    dispatch({ type: REMOVE_CART, payload: id })
  } catch (error) {
    console.log(error);
  }
} 

export const cartItemIncrement = (id) => async(dispatch) => {
  try {
   
    dispatch({ type: CART_ITEM_INCREMENT, payload: id })
  } catch (error) {
    console.log(error);
  }
} 
export const cartItemDecrement = (id) => async(dispatch) => {
  try {
    dispatch({ type: CART_ITEM_DECREMENT, payload: id })
  } catch (error) {
    console.log(error);
  }
} 
