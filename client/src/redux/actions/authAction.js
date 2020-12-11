import {
  SIGN_IN_SUCCESS,
  REGISTRATION_SUCCESS,
  LOAD_USER,
  LOGOUT,
  REGISTRATION_VERIFY,
} from '../type'
import * as api from '../../api';
import setAuthToken from '../../utils/setAuthToken';
import Notification from '../../utils/Notification';
 
// Action creator
export const signIn = (data) => async(dispatch) => {
  try {
    const  res  = await api.signIn(data);
    dispatch({ type: SIGN_IN_SUCCESS, payload: res })
    loadUser()
    Notification("Login success","success",1000)
  } catch (error) {
    Notification(error.response.data.msg,"warning",1500)

  }
} 

export const registerAction = (data) => async(dispatch) => {
  try {
    const  res  = await api.registration(data);
    dispatch({ type: REGISTRATION_SUCCESS, payload: res })
    Notification("Check you mail","success",1000)
  } catch (error) {
    Notification(error.response.data.msg,"warning",1500)
  }
} 

export const registrationVerify = (token) => async(dispatch) => {
  try {
    const  res  = await api.registrationVerify(token);
    dispatch({ type: REGISTRATION_VERIFY, payload: res })
    Notification("Verification success","success",1000)
  } catch (error) {
    Notification(error.response.data.msg,"warning",1500)
  }
} 


export const loadUser = () => async(dispatch) => {
  if(localStorage.token){
    setAuthToken(localStorage.token);
  }
  try {
    const  res  = await api.loadUser();
    dispatch({ type: LOAD_USER, payload: res })
  } catch (error) {
    Notification("something went wrong","warning",1000)
  }
} 

export const logout = () => async(dispatch) => {
  try {
    dispatch({ type: LOGOUT })
    Notification("Logout success","success",1000)
  } catch (error) {
    console.log(error);
  }
} 


export const sendMail = (data) => async(dispatch) => {
  try {
      await api.sendMail(data);
    // dispatch({ type: REGISTRATION_SUCCESS, payload: res })
    Notification("Your mail send success","success",1000)
  } catch (error) {
    Notification(error.response.data.msg,"warning",1500)
  }
} 

