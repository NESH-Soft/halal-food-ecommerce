import { loadUser } from '../actions/authAction';
import {
  SIGN_IN_SUCCESS,
  REGISTRATION_SUCCESS,
  LOAD_USER,
  SIGN_IN_FAIL,
  REGISTRATION_FAIL,
  REGISTRATION_VERIFY,
  LOGOUT,
} from '../type'
const initialState = {
  isAuthenticated: false,
  user: {},
  success: false,
  serverMessage: {}

};
const authReducer = (state = initialState, action) => {
  switch(action.type){
    case SIGN_IN_SUCCESS:
    case REGISTRATION_VERIFY:

      return {
        ...state,
        isAuthenticated: true,
        success: true
      }
  
    case LOAD_USER:
      return {
        ...state,
        user: action.payload.user,
      }
      case REGISTRATION_SUCCESS:
        return {
          ...state,
          serverMessage: action.payload.msg,
        }

    case LOGOUT:
      return{
        isAuthenticated: false,
        user: {},
      }
    default:
      return state;
  }
}

export default authReducer;
