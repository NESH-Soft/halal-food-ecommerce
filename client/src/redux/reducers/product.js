import {
  GET_PRODUCTS,
  GET_PRODUCT,
  GET_SPECIAL_PRODUCT,
  GET_PRODUCTS_BY_CATEGORY,
  CHANGE_ADD_TO_CART_OPTION,
  CHANGE_ADD_TO_WISHLIST_OPTION,
  SEARCH_PRODUCT
} from '../type'
const initialState = {
  products: [],
  product: {},
  specialProducts: [],
  searchProducts: [],
  productFilterByCategory:[],
  success: false,
  loading: false
};
const productReducer = (state = initialState, action) => {
  const getItem = id => {
    const product = state.products.find(item => item._id === id);
    return product;
  }

  switch(action.type){
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload
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
            searchProducts: action.payload
          }
        case GET_PRODUCTS_BY_CATEGORY:
          return {
            productFilterByCategory: action.payload
          }
        case CHANGE_ADD_TO_CART_OPTION:
          
        
              let tempProduct = [...state.products]
              const index = tempProduct.indexOf(getItem(action.payload));
              const product = tempProduct[index];
              product.inCart = true;
           
            return{
                products: tempProduct
          }

          case CHANGE_ADD_TO_WISHLIST_OPTION:
           
              let tempwishProduct = [...state.products]
              const indexx = tempwishProduct.indexOf(getItem(action.payload));
              const p = tempwishProduct[indexx];
              p.inWishlist = true;
           
            return{
                products: tempwishProduct
          }

    default:
      return state;
  }
}

export default productReducer;
