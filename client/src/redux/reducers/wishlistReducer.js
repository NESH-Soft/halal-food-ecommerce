import {
  ADD_TO_WISHLIST,
  REMOVE_WISHLIST,
  GET_WISHLIST
} from '../type'
const initialState = {
  wishList: [],

};
const wishListReducer = (state = initialState, action) => {
  switch(action.type){
    case GET_WISHLIST:
      return {
      
        wishList:  action.payload
      }
    case ADD_TO_WISHLIST:
      return {
    
        wishList: [...state.wishList, action.payload]
      }
    case REMOVE_WISHLIST:
      return {
      
        wishList: state.wishList.filter(w=>w._id !== action.payload)
      }
  
    default:
      return state;
  }
}

export default wishListReducer;
