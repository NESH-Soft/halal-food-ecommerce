import {
  CREATE_ORDER_CASH_ON_DELIVERY,
  CREATE_ORDER,
  GET_ORDERER,
  CANCEL_ORDERER,
  GET_SINGLE_ORDERER
} from '../type'
import * as api from '../../api';
import Notification from '../../utils/Notification';
// Action creator
export const createOrderCashOnDelivery = (order) => async(dispatch) => {
  try { 
    const  res  = await api.createOrderCashOnDelivery(order);
    dispatch({ type:CREATE_ORDER_CASH_ON_DELIVERY, payload: res })
    Notification("Create success","success",1000)
  } catch (error) {
    Notification(error.response.data.msg,"danger",1500)
  }
} 

export const  createOrder= (order) => async(dispatch) => {
  try {
    const  res = await api.createOrder(order);
    dispatch({ type: CREATE_ORDER, payload: res })
    Notification("Create success","success",1000)
  } catch (error) {
    Notification(error.response.data.msg,"danger",1500)
  }
}

export const cancelOrder = () => async(dispatch) => {
  try {
    const  res  = await api.cancelOrder();
    dispatch({ type: CANCEL_ORDERER, payload: res })
    Notification("Cancel success","success",1000)
  } catch (error) {
    Notification(error.response.data.msg,"danger",1500)
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

export const getSingleOrder = (id) => async(dispatch) => {
  try {
    dispatch({ type: GET_SINGLE_ORDERER, payload: id })
  } catch (error) {
    console.log(error);
  }
}






