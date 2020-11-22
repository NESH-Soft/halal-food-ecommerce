import { combineReducers } from "redux";
import productReducer from "./product";
import cartReducer from "./cartReducer";
import authReducer from './authReducer';
import categoryReducer from './categoryReducer';
import wishlistReducer from './wishlistReducer'
import orderReducer from './orderReducer'


export default combineReducers({
  productState: productReducer,
  cartState: cartReducer,
  authState: authReducer,
  categoryState: categoryReducer,
  wishListState: wishlistReducer,
  orderState: orderReducer
});
