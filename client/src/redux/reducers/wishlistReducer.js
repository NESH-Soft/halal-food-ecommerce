import {
  ADD_TO_WISHLIST,
  REMOVE_WISHLIST,
  GET_WISHLIST,
  CHANGE_ADD_TO_CART_IN_WISHLIST
} from '../type'
const initialState = {
  wishList: [],

};
const wishListReducer = (state = initialState, action) => {
  const  changeCart = (...data)=>{
    let tempProduct = [...data]
    const item = tempProduct.find(item=> item._id === action.payload)
    const index = tempProduct.indexOf(item);
    const product = tempProduct[index];
    product.inCart = true;
    return tempProduct 
  }

  switch(action.type){
    case GET_WISHLIST:
      return {
      
        wishList:  action.payload.wishList
      }
    case ADD_TO_WISHLIST:
      return {
    
        wishList: action.payload.newWishList
      }
    case REMOVE_WISHLIST:
      return {
      
        wishList: state.wishList.filter(w=>w._id !== action.payload)
      }
      case CHANGE_ADD_TO_CART_IN_WISHLIST:
        return {

          wishList:changeCart(...state.wishList)
        }
  
    default:
      return state;
  }
}

export default wishListReducer;
