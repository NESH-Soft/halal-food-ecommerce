import { combineReducers } from "redux";
import productReducer from "./product";
import cartReducer from "./cartReducer"


export default combineReducers({
  productState: productReducer,
  cartState: cartReducer
});
