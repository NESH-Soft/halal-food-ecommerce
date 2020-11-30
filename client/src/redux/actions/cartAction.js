import * as api from '../../api';
import Notification from '../../utils/Notification'
import {
  ADD_TO_CART,
  REMOVE_CART,
  CART_ITEM_DECREMENT,
  CART_ITEM_INCREMENT,
  AMOUNT_COUNT
} from '../type'
// import {changeAddToCartOption,changeShopAddToCartOption} from './product'


// Action creator
export const addToCart = (data) => async(dispatch) => {

  // dispatch(changeAddToCartOption(data._id))
  // dispatch(changeShopAddToCartOption(data._id))

  // dispatch(amountCount())
  try {
    dispatch({ type: ADD_TO_CART, payload: data })
    Notification("added success","success")
  } catch (error) {
    console.log(error);
  }
} 
export const removeCart = (id) => async(dispatch) => {
  // dispatch(amountCount())
  try {
    dispatch({ type: REMOVE_CART, payload: id })
    Notification("Remove item","danger")
  } catch (error) {
    console.log(error);
  }
} 

export const cartItemIncrement = (id) => async(dispatch) => {
  // dispatch(amountCount())
  try {
   
    dispatch({ type: CART_ITEM_INCREMENT, payload: id })
  } catch (error) {
    console.log(error);
  }
} 
export const cartItemDecrement = (id) => async(dispatch) => {
  // dispatch(amountCount())
  try {
    dispatch({ type: CART_ITEM_DECREMENT, payload: id })
  } catch (error) {
    console.log(error);
  }
} 

export const amountCount = () => async(dispatch) => {
  try {
    dispatch({ type: AMOUNT_COUNT})
  } catch (error) {
    console.log(error);
  }
} 
