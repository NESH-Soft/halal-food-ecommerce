import {
  ADD_TO_CART,
  REMOVE_CART,
  CART_ITEM_INCREMENT,
  CART_ITEM_DECREMENT,
  AMOUNT_COUNT,
  CLEAR_CART_ACTION
} from '../type'
const initialState = {
  cart: [],
  cartSubTotal: 0,
  tax: 0,
  cartTotal: 0,
  shippingCost: 0

};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      //     console.log(action.payload._id)
      //     const data =state.cart.length ? state.cart.map(item => { if(item._id === action.payload._id) {return null}else{
      //       return action.payload
      //     }}) : action.payload


      // console.log(data)
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }
    case REMOVE_CART:
      return {
        ...state,
        cart: state.cart.filter(cart => cart._id !== action.payload)
      }
    case CART_ITEM_INCREMENT:
      return {
        ...state,
        cart: state.cart.map(c => {
          return {
            _id: c._id,
            name: c.name,
            unit: c.unit,
            stock: c.stock,
            specialPrice: c.specialPrice,
            image: c.image,
            quantity: c._id === action.payload ? c.quantity + 1 : c.quantity
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
            stock: c.stock,
            specialPrice: c.specialPrice,
            image: c.image,
            quantity: c._id === action.payload ? c.quantity - 1 : c.quantity
          }
        })
      }
    case AMOUNT_COUNT:
      const productPriceArray = state.cart.map(function (product) {
        return product.specialPrice * product.quantity;
      });

      const totalPrice = productPriceArray.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;;
      }, 0);

      const shipping = totalPrice < 8000 ? 1250 : 0
      const taxCost = (totalPrice * 8) / 100
      return {
        ...state,
        cartSubTotal: totalPrice,
        shippingCost: shipping,
        tax: Math.round(taxCost),
        cartTotal: Math.round(totalPrice + shipping + taxCost),
      }
    case CLEAR_CART_ACTION:
      return {
        cart: [],
        cartSubTotal: 0,
        tax: 0,
        cartTotal: 0,
        shippingCost: 0
      }
    default:
      return state;
  }
}

export default cartReducer;
