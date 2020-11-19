import { combineReducers } from "redux";
import productReducer from "./product";
import cartReducer from "./cartReducer"
import authReducer from './authReducer'


export default combineReducers({
  productState: productReducer,
  cartState: cartReducer,
  authState: authReducer
});
