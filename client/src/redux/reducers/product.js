import {
  GET_PRODUCTS,
  GET_PRODUCT,
  GET_SPECIAL_PRODUCT,
  GET_PRODUCTS_BY_CATEGORY,
  CHANGE_ADD_TO_CART_OPTION,
  CHANGE_ADD_TO_WISHLIST_OPTION,
  SEARCH_PRODUCT,
  CHANGE_SHOP_ADD_TO_CART_OPTION,
  CHANGE_SHOP_ADD_TO_WISHLIST_OPTION
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

  const  changeCart = (...data)=>{
    let tempProduct = [...data]
    const item = tempProduct.find(item=> item._id === action.payload)
    const index = tempProduct.indexOf(item);
    const product = tempProduct[index];
    product.inCart = true;
    return tempProduct 
  }
  const  changeWishlist = (...data)=>{
    let tempProduct = [...data]
    const item = tempProduct.find(item=> item._id === action.payload)
    const index = tempProduct.indexOf(item);
    const product = tempProduct[index];
    product.inWishlist = true;
    return tempProduct 
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
         
          return {
            ...state,
            products:changeCart(...state.products)
          }
        
        case CHANGE_ADD_TO_WISHLIST_OPTION:
            return {
              ...state,
              products:changeWishlist(...state.products)
            }
        case CHANGE_SHOP_ADD_TO_CART_OPTION:
              return {
                ...state,
                productFilterByCategory:changeCart(...state.productFilterByCategory)
              }
          case CHANGE_SHOP_ADD_TO_WISHLIST_OPTION:
                return {
                  ...state,
                  productFilterByCategory:changeWishlist(...state.productFilterByCategory)
                }
    default:
      return state;
  }
}

export default productReducer;
