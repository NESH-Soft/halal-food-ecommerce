import {
  GET_PRODUCTS,
  GET_PRODUCT,
  GET_SPECIAL_PRODUCT,
  GET_PRODUCTS_BY_CATEGORY,
  SEARCH_PRODUCT,
  CLEAR_SEARCH_STATE,

} from '../type'
const initialState = {
  products: [],
  product: {},
  specialProducts: [],
  searchProducts: [],
  productFilterByCategory:[],
  success: false,
  loading: false,
};
const productReducer = (state = initialState, action) => {


  switch(action.type){
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload.filter(product=>product.productType === 'regular'),
        productFilterByCategory: action.payload.filter(product=>product.productType === 'regular'),
      }
      case GET_SPECIAL_PRODUCT:
        return {
          ...state,
          specialProducts: action.payload
        }
      case GET_PRODUCT:
        return {
          ...state,
          product: action.payload
        }
        case SEARCH_PRODUCT:
          return {
            ...state,
            searchProducts: action.payload.products
          }

      case CLEAR_SEARCH_STATE:
            return {
              ...state,
              searchProducts: []
            } 
        case GET_PRODUCTS_BY_CATEGORY:
          return {
            ...state,
            productFilterByCategory: action.payload
          }

    default:
      return state;
  }
}

export default productReducer;
