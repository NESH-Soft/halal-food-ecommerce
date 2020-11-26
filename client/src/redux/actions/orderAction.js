import {
  CREATE_ORDER_CASH_ON_DELIVERY,
  CREATE_ORDER,
  GET_ORDERER,
  CANCEL_ORDERER
} from '../type'
import * as api from '../../api';

// Action creator
export const createOrderCashOnDelivery = (order) => async(dispatch) => {
  try {
    const  res  = await api.createOrderCashOnDelivery(order);
    dispatch({ type:CREATE_ORDER_CASH_ON_DELIVERY, payload: res })
  } catch (error) {
    console.log(error);
  }
} 

export const  createOrder= (order) => async(dispatch) => {
  try {
    const  res = await api.createOrder(order);
   
    dispatch({ type: CREATE_ORDER, payload: res })
  } catch (error) {
    console.log(error);
  }
}

export const cancelOrder = () => async(dispatch) => {
  try {
    const  res  = await api.cancelOrder();
    dispatch({ type: CANCEL_ORDERER, payload: res })
  } catch (error) {
    console.log(error);
  }
} 
export const getOrder = () => async(dispatch) => {
  try {
    const  res = await api.getOrder();
   
    dispatch({ type: GET_ORDERER, payload: res })
  } catch (error) {
    console.log(error);
  }
}


