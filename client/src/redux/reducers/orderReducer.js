import {
  CREATE_ORDER_CASH_ON_DELIVERY,
  CREATE_ORDER,
  GET_ORDERER,
  CANCEL_ORDERER
 } from '../type'
 const initialState = {
   order: {},
   allOrder: [],
   success: false
 
 };
 const orderReducer = (state = initialState, action) => {
   switch(action.type){
     case CREATE_ORDER_CASH_ON_DELIVERY:
       return {
         order: action.payload
       }
       case CREATE_ORDER:
        return {
          order: action.payload
        }
        case GET_ORDERER:
          return {
            allOrder: action.payload
          }
        case CANCEL_ORDERER:
          return {
            allOrder: state.allOrder.filter(order=>order._id !== action.payload)
          }
     default:
       return state;
   }
 }
 
 export default orderReducer;
 