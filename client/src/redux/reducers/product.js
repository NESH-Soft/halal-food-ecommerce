import {
  GET_PRODUCTS,
  GET_PRODUCT,
  GET_SPECIAL_PRODUCT,
  GET_PRODUCTS_BY_CATEGORY,
  SEARCH_PRODUCT,
  CLEAR_SEARCH_STATE,
  ADD_REVIEW

} from '../type'
const initialState = {
  homePageProduct:[],
  products: [],
  product: {},
  specialProducts: [],
  LatestProducts:[],
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
        homePageProduct:  action.payload.filter(product=>product.productType === 'homePageProduct'),
        latestProducts: action.payload.filter(product=>product.productType === 'latest'),
        productFilterByCategory: action.payload.filter(product=>product.productType === 'regular'),
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
            searchProducts: action.payload.products
          }

      case CLEAR_SEARCH_STATE:
            return {
              ...state,
              searchProducts: []
            } 
        case GET_PRODUCTS_BY_CATEGORY:
        
        const getFilterProduct = (data)=>{
            if(data.type === 'category'){
              const product = state.products.filter(product=>product.category === data.category )
              return product
            }
            if(data.type === 'subCategory'){
              const product = state.products.filter(product=>product.subCategory === data.subCategory )
              return product
            }
           
          }
          return {
            ...state,
             productFilterByCategory: getFilterProduct(action.payload)
          }
        case ADD_REVIEW:
          console.log(action.payload)
            return {
              ...state,
              product: action.payload.newReview
  

            }
    default:
      return state;
  }
}

export default productReducer;
