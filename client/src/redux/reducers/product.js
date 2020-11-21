import {
  GET_PRODUCTS,
  GET_PRODUCT,
  GET_PRODUCTS_BY_CATEGORY,
  CHANGE_ADD_TO_CART_OPTION
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
        case CHANGE_ADD_TO_CART_OPTION:
            const getItem = id => {
              const product = state.products.find(item => item._id === id);
              return product;
            }
        
              let tempProduct = [...state.products]
              const index = tempProduct.indexOf(getItem(action.payload));
              const product = tempProduct[index];
              product.inCart = true;
           
            return{
                products: tempProduct
          }

    default:
      return state;
  }
}

export default productReducer;
