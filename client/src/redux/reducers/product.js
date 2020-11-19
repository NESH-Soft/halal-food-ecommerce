import {
  GET_PRODUCTS,
  GET_PRODUCT,
  GET_PRODUCTS_BY_CATEGORY
} from '../type'
const initialState = {
  products: [],
  product: {},
  productFilterByCategory:[],
  success: false,
  loading: false
};
const productReducer = (state = initialState, action) => {
  switch(action.type){
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload
      }
      case GET_PRODUCT:
        return {
          ...state,
          product: action.payload
        }
        case GET_PRODUCTS_BY_CATEGORY:
          return {
            productFilterByCategory: action.payload
          }
    default:
      return state;
  }
}

export default productReducer;
