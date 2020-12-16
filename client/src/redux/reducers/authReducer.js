import {
  SIGN_IN_SUCCESS,
  REGISTRATION_SUCCESS,
  LOAD_USER,
  REGISTRATION_VERIFY,
  LOGOUT,
} from '../type'
const initialState = {
  isAuthenticated: false,
  user: {},
  success: false,
  serverMessage: null

};
const authReducer = (state = initialState, action) => {

  switch(action.type){
  

    case SIGN_IN_SUCCESS:
    case REGISTRATION_VERIFY:
      localStorage.setItem('token',action.payload.token)
      return {
        ...state,
        isAuthenticated: true,
        success: true
      }
  
    case LOAD_USER:
      return {
        ...state,
        user: action.payload.user,
        isAuthenticated: action.payload.success,
      }
      case REGISTRATION_SUCCESS:
        return {
          ...state,
          serverMessage: action.payload.msg,
          success:action.payload.success

        }

    case LOGOUT:
      localStorage.removeItem('token')
      return{
        isAuthenticated: false,
        user: {},
      }
    default:
      return state;
  }
}

export default authReducer;
