import {
  ADD_TO_CART,
  REMOVE_CART,
  CART_ITEM_INCREMENT,
  CART_ITEM_DECREMENT
} from '../type'
const initialState = {
  cart: [],

};
const cartReducer = (state = initialState, action) => {
  switch(action.type){
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }
    case REMOVE_CART:
      return {
        ...state,
        cart: state.cart.filter(cart=>cart._id !== action.payload)
      }
    case CART_ITEM_INCREMENT: 
      let tempCartInc = state.cart;
      const selectedProductInc = tempCartInc.find(item =>  item._id === action.payload);
      const indexInc = tempCartInc.indexOf(selectedProductInc);
      const productInc = tempCartInc[indexInc];
      productInc.quantity = productInc.quantity + 1
      return {
        ...state,
        cart: tempCartInc
     
      }
    case CART_ITEM_DECREMENT: 
      let tempCartDec = state.cart;
      const selectedProductDec = tempCartDec.find(item =>  item._id === action.payload);
      const index = tempCartDec.indexOf(selectedProductDec);
      const productDec = tempCartDec[index];
      productDec.quantity = productDec.quantity - 1
      return {
        ...state,
        cart: tempCartDec
     
      }
    default:
      return state;
  }
}

export default cartReducer;
