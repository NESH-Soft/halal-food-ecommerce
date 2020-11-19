import { combineReducers } from "redux";
import productReducer from "./product";
import cartReducer from "./cartReducer";
import authReducer from './authReducer';
import categoryReducer from './categoryReducer'



export default combineReducers({
  productState: productReducer,
  cartState: cartReducer,
  authState: authReducer,
  categoryState: categoryReducer
});
