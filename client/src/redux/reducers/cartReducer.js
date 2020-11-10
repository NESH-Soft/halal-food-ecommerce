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
      return {
        ...state,
        cart: state.cart.map(c=> {
          return {
            _id: c._id,
            name: c.name,
            unit: c.unit,
            price: c.price,
            image: c.image,
            quantity: c._id === action.payload ? c.quantity +1 : c.quantity
          }
      })
      }
    case CART_ITEM_DECREMENT: 
    return {
      ...state,
      cart: state.cart.map(c => {
        return {
          _id: c._id,
          name: c.name,
          unit: c.unit,
          price: c.price,
          image: c.image,
          quantity: c._id === action.payload ? c.quantity - 1 : c.quantity
        }
    })
    }
    default:
      return state;
  }
}

export default cartReducer;
