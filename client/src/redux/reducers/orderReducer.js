import {
  CREATE_ORDER_CASH_ON_DELIVERY,
  CREATE_ORDER,
  GET_ORDERER,
  CANCEL_ORDERER,
  GET_SINGLE_ORDERER,
 } from '../type';
 const initialState = {
   order: {},
   allOrder: [],
   success: false,
   singleOrder: [],
 
 };

 const orderReducer = (state = initialState, action) => {

   switch(action.type){
     case CREATE_ORDER_CASH_ON_DELIVERY:
       return {
         ...state,
         order: action.payload,
         success:true
       }
       case CREATE_ORDER:
        return {
          order: action.payload,
          success: true
        }
        case GET_ORDERER:
          return {
            ...state,
            allOrder: action.payload
          }
        case CANCEL_ORDERER:
          return {
            ...state,
            allOrder: state.allOrder.filter(order=>order._id !== action.payload)
          }
        case GET_SINGLE_ORDERER:
          console.log(action.payload)
          return {
            ...state,
            singleOrder: state.allOrder.filter(order=>order._id === action.payload)
          }
     default:
       return state;
   }
 }
 
 export default orderReducer;
 